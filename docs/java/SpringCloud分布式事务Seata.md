# SpringCloud分布式事务Seata

## 前言

阅读本篇文章您将了解到如下内容:

- Seata
- Seata Server 部署
- Seata 事务分组

如果您了解以下内容, 可便于理解:

- [Spring Cloud Alibaba](https://spring.io/projects/spring-cloud-alibaba)
- [Nacos](https://nacos.io/zh-cn/)
- [Docker Compose](https://docs.docker.com/compose/)

本文为应用型文章, 将不会阐述过多理论知识

## 术语解析

本次部署中会用到以下术语:

- Seata Server: Seata服务端, 官方称之为事务协调者TC(**T**ransaction **C**oordinator), 单独部署
- Seata Client: Seata客户端, 官方称之为资源管理器RM(**R**esource **M**anager), 与业务系统集成

官方术语表: [Seata术语](https://seata.io/zh-cn/docs/overview/terminology.html)

## 技术选型

Seata有多种部署方案, 生产环境推荐使用如下方式: 注册中心+配置中心+数据库

对应的技术栈如下:

- 注册中心: Nacos
- 配置中心: Nacos
- 数据库: MySQL 8.0

## 部署Seata Server

### 初始化数据库

创建数据库seata-server及对应的访问用户seata

使用官方的数据库脚本进行初始化: [seata/script/server/db at develop](https://github.com/seata/seata/tree/develop/script/server/db)

除MySQL以外还支持Oracle和PostgreSQL

### 自定义配置文件

参照官方部署文档: [使用 Docker compose 快速部署 Seata Server](https://seata.io/zh-cn/docs/ops/deploy-by-docker-compose.html)

编写服务端配置文件`registry.conf`:

```
registry {
  type = "nacos"

  nacos {
  	# 服务名称
    application = "seata-server"
    serverAddr = "127.0.0.1:8848"
    # 命名空间ID
    namespace = "spring-cloud-development"
    group = "SEATA_GROUP"
    # 集群名称
    cluster = "default"
  }
}

config {
  type = "nacos"

  nacos {
    serverAddr = "127.0.0.1:8848"
    namespace = "spring-cloud-development"
    group = "SEATA_GROUP"
    # 配置文件dataId
    dataId: "seata-server.properties"
  }
}
```

在nacos中增加配置`seata-server.properties`, 调整为数据库模式:

```properties
store.mode=db
store.db.datasource=druid
store.db.dbType=mysql
store.db.driverClassName=com.mysql.cj.jdbc.Driver
store.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false
store.db.user=seata
store.db.password=seata
```

**注意: 配置的dataId和group应与`registry.conf`中的一致**

### 使用docker-compose启动

对docker-compose不再赘述, 可阅读前言中的官方文档

编写`docker-compose.yaml`:

```yaml
# 根据自己的docker版本选择对应的version
version: "3.1"
services:
  seata-server:
    image: seataio/seata-server:1.4.2
    hostname: seata-server
    ports:
      - "8091:8091"
    environment:
      - SEATA_PORT=8091
      - SEATA_IP=127.0.0.1
      # 此处有坑
      - SEATA_CONFIG_NAME=file:/root/seata-config/registry
    volumes:
      # 此处有坑
      - "./seata-server/config:/root/seata-config"
```

这里有两个因为笔者不熟悉docker产生的坑:

环境变量`SEATA_CONFIG_NAME`, 指的是**容器内部的环境**

所以路径`file:/root/seata-config/registry`是指, **服务端读取的配置文件`registry.conf`为容器内部的`/root/seata-config/registry.conf`**

并非我们本机的`/root/seata-config/registry`

所以我们要将自己写的配置文件映射到其内部中, 即后面一个坑: `"./seata-server/config:/root/seata-config"`

它的含义是**将本机路径`./seata-server/config`映射到容器内部路径`/root/seata-config`**

综上, 我们需要完成的操作是:

1. 在`docker-compose.yaml`目录下创建`seata-server/config`目录
2. 将`registry.conf`文件放置到`${docker-compose.yaml目录}/seata-server/config`
3. 运行命令`docker-compose up -d`

如果您遇到了`io.seata.common.exception.NotSupportYetException: config type can not be null`, 请仔细阅读上述内容

## 业务系统集成Seata Client

### 初始化数据库

在业务系统中增加`undo_log`表:

```mysql
-- 注意此处0.3.0+ 增加唯一索引 ux_undo_log
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 自定义配置文件

在nacos中增加客户端公共配置文件`seata-client.properties`:

```properties
seata.registry.type=nacos
seata.registry.nacos.server-addr=127.0.0.1:8848
seata.registry.nacos.namespace=spring-cloud-development
seata.registry.nacos.group=SEATA_GROUP
seata.registry.nacos.application=seata-server

seata.config.type=nacos
seata.config.nacos.server-addr=127.0.0.1:8848
seata.config.nacos.namespace=spring-cloud-development
seata.config.nacos.group=SEATA_GROUP
```

**注意: 客户端配置的group应与服务端配置相同**

### 引入启动类依赖

按照[Seata部署指南](https://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html)推荐的方式在`pom.xml`中引入依赖`spring-cloud-starter-alibaba-seata`:

```xml
<dependency>
    <groupId>io.seata</groupId>
    <artifactId>seata-spring-boot-starter</artifactId>
    <version>最新版</version>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
    <version>2.2.1.RELEASE</version>
    <exclusions>
        <exclusion>
            <groupId>io.seata</groupId>
            <artifactId>seata-spring-boot-starter</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

之后再引入上一节中的客户端配置即可:

```yaml
spring:
  cloud:
    nacos:
      config:
        shared-configs:
          - data-id: seata-client.properties
            group: SEATA_GROUP
```

## 事务分组

想要学会一个概念, 最重要的是了解为什么要使用它

回顾最开始的概念, Seata Server是事务协调者TC(**T**ransaction **C**oordinator)

也就是说它在分布式事务中起到至关重要的作用

但如何它挂了呢?或者网络波动了呢?

所以事务分组其实可以理解为Seata Server集群分组, 是为了TC的高可用

### Seata Server配置

服务端要明确自己的分组名称, 修改`registry.conf`文件:

```
registry {

  nacos {
  	# Seata Server所属集群名称为dev
    cluster = "dev"
  }
}
```

按照官方文档[Seata 事务分组](https://seata.io/zh-cn/docs/user/txgroup/transaction-group.html), 此处有一个坑

**需要在nacos中增加一个事务组名对应集群名的配置**

以上面的集群为例, 需要增加`service.vgroup-mapping.${分组名}`配置, 内容为集群名称: `dev`

原因在于`RegistryService`中如下代码:

```java
public interface RegistryService<T> {

    String PREFIX_SERVICE_MAPPING = "vgroupMapping.";

    String PREFIX_SERVICE_ROOT = "service";

    String CONFIG_SPLIT_CHAR = ".";

    default String getServiceGroup(String key) {
        // 假设分组名为group-dev
        // 会在nacos中寻找dataId为service.vgroupMapping.group-dev的配置
        key = PREFIX_SERVICE_ROOT + CONFIG_SPLIT_CHAR + PREFIX_SERVICE_MAPPING + key;
        if (!SERVICE_GROUP_NAME.contains(key)) {
            ConfigurationCache.addConfigListener(key);
            SERVICE_GROUP_NAME.add(key);
        }
        return ConfigurationFactory.getInstance().getConfig(key);
    }
}
```

如果客户端启动后遇到`can not get cluster name in registry config 'service.vgroupMapping.xx', please make sure registry config correct`

请仔细阅读上述内容

### Seata Client配置

在项目配置中增加如下内容即可:

```yaml
seata:
  tx-service-group: group-dev
```

最终效果为: 事务组`group-dev`会使用集群名称为`dev`的TC

### 应用场景

官方提供了很好的示例, 可参照: [事务分组与高可用 (seata.io)](https://seata.io/zh-cn/docs/user/txgroup/transaction-group-and-ha.html)

## 总结

纸上得来终觉浅

理解Seata和实际部署Seata之间, 还隔着docker/nacos等技术鸿沟

最后总结下使用Seata的整体流程:

1. 部署Seata Server
2. 为事务进行分组
3. 业务系统集成Seata Client



**我是Houtaroy, 若有一行代码能为他人提供帮助, 便是在下的毕生荣幸**
