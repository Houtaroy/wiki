# 使用Druid解析SQL查询语句

## 1 前言

阅读本篇文章您可以了解到如下内容:

- Druid SQL Parser
- 访问者模式
- MyBatis

在此之前, 如果您阅读以下内容可更好的进行理解:

- [Druid SQL AST](https://github.com/alibaba/druid/wiki/Druid_SQL_AST)
- [Druid SQL Parser](https://github.com/alibaba/druid/wiki/SQL-Parser)
- [MyBatis XML映射相关](https://mybatis.org/mybatis-3/zh/sqlmap-xml.html)

## 2 需求分析

需求来自于公司项目, 简单提取出以下几点:

1. 解析查询列
2. 解析自定义查询参数
3. 根据查询参数编译SQL语句并进行查询
4. 防止SQL注入

对其中的部分内容详细阐述:

### 解析查询列

短短五个字, 却包含了许多内容, 首先列举下常用的查询列情况:

1. 列名, 例如`select name from t_user`中的`name`
2. 有别名的列, 例如`select gender as sex from t_user`中的`gender as sex`
3. 方法, 例如`select concat(name, email) from t_user`中的`concat(name, email)`
4. 全部列, 例如`select * from t_user`

### 解析自定义查询参数

这个需求主要看约束了, 我们讨论使用MyBatis的写法, 例如: `select * from t_user where id = #{id} and name like '#{name}%'`

最后提取的结果为`['id', 'name']`即可

## 3 技术选型

通过需求分析, 我们可以将工作主要分为三个模块: **SQL解析**/**SQL编译**/**SQL执行**

由于公司使用的是MyBatis, 所以SQL执行方式自然是字符换替换, 那SQL执行的需求可以进一步缩小为**防止SQL注入**

### SQL解析

由于自定义查询参数书写格式固定, 我们只需要正确的解析出SQL的查询条件, 再利用正则提取内容即可

所以如何正确解析SQL成为关键

通过网上冲浪, 总结出了如下开源方案:

1. Antlr
2. Apache Calcite
3. Druid
4. JSqlParser
5. sharding-JDBC

由于业务并不复杂, 偏重量级的Antlr/基于Antlr实现的sharding-JDBC首先排除

其次排除的是JSqlParser, 它虽然使用便捷, 但不支持`{}`的输入, 会对自定义参数的解析产生影响

最后选择Druid的原因有如下两点:

1. 中文文档且详细, 便于理解和开发
2. 本功能为支撑功能, 后续会有其它开发人员介入, 英文水平不可控

### SQL编译

SQL编译其实是根据提供的查询参数进行占位符替换, 在使用量不高的情况下, 使用正则替换即可

## 4 研究与实现

### 4.1 SQL抽象语法树

Druid的SQL解析, 核心实际是它的SQL AST(**A**bstract **S**yntax **T**ree), 即SQL抽象语法树

在阅读[官方文档](https://github.com/alibaba/druid/wiki/Druid_SQL_AST)后, 可以总结我们会用到的一些语法树节点:

1. `SQLSelectStatement`: 查询SQL节点
2. `SQLTableSource`: 表节点
3. `SQLSelect`: 查询节点
4. `SQLSelectQueryBlock`: 查询块节点

还有一些`SQLExpr`, 官方文档描述的不够详细, 需要在开发的时候进行测试

### 4.2 访问者模式

上一节中介绍了, SQL抽象语法树是核心, 那么怎么根据这棵语法树得到我们想要的结果呢?

Druid采用的是设计模式中的访问者模式

翻开以前学习过(~~但从没用过~~)的设计模式教材, 发现访问者模式的应用场景正是: 

如果你需要对一个复杂对象结构 (例如**对象树**)中的所有元素执行某些操作，可使用访问者模式

那么对于我们而言, 只需要实现一个自己的访问者即可, 伪代码的使用逻辑大概如下:

```java
// 生成语法树
String sql = "select * from t_user";
SQLSelectStatement statement = parse(sql);
// 访问并解析
MyVisitor visitor = new MyVisitor;
statement.accept(visitor);
// 获取结果
visitor.getSelectColumns();
visitor.getParameters();
```

### 4.3 是否有轮子?

Druid出自大厂之手, 必然会为我们提供很多使用的功能, 通过翻阅源码后, 找到了一个访问者: `SchemaStatVisitor`

它的属性大概如下:

```java
public class SchemaStatVisitor extends SQLASTVisitorAdapter {

    protected final Map<Long, Column>                  columns        = new LinkedHashMap<Long, Column>();
    protected final List<Condition>                    conditions     = new ArrayList<Condition>();
    protected final Set<Relationship>                  relationships  = new LinkedHashSet<Relationship>();
    protected final List<Column>                       orderByColumns = new ArrayList<Column>();
    protected final Set<Column>                        groupByColumns = new LinkedHashSet<Column>();
    protected final List<SQLAggregateExpr>             aggregateFunctions = new ArrayList<SQLAggregateExpr>();
    protected final List<SQLMethodInvokeExpr>          functions          = new ArrayList<SQLMethodInvokeExpr>(2);
    private List<Object> parameters;
}
```

列`columns`, 查询条件`conditions`, 看似都齐了, 貌似今天可以划水了?

然而现实是残酷的, 它有致命的缺点:

1. 无法实现列别名
2. 无法按我们规定的书写方式解析查询参数

在简单研究后, 笔者决定放弃`SchemaStatVisitor`, 基于最原始的访问者接口`SQLASTVisitor`手动实现, 原因如下:

1. 需求简单, 且不支持复杂SQL
2. Druid的实现有自己一套体系, 例如`MySqlSchemaStatVisitor`就继承了`SchemaStatVisitor`, 所以后期其它开发人员介入, 需要进行不同数据源订制时, 坑和时间成本不可控
3. ~~我想上手一下访问者模式~~

### 4.4 创建模型

根据需求, 我们需要返回解析后的查询列和查询参数

创建查询列`SelectColumn`:

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SelectColumn {

  protected String table;
  protected String name;
  protected String alias;

  public boolean isSelectAll() {
    return "*".equals(name);
  }
}
```

查询参数用字符串数组`List<String>`即可

设计完上述两个模型后, 不着急开始写访问者, 我们好像遗漏了一些东西, 举个例子:

```sql
select t.name from t_user t
```

不光列有别名, 表也可能会产生别名

如果我们不对表进行处理, 在解析列时可能会出现`SelectColumn`的`table`属性赋值为`t`的情况, 这显示是有问题的

所以还需要对表进行解析, 创建`SelectTable`:

```java
package cn.houtaroy.java.lib.sql.analyzer;

@Data
public class SelectTable {

  protected String name;
  protected String alias;

  public SelectTable(SQLExprTableSource expr) {
    this.name = expr.getTableName();
    this.alias = expr.getAlias();
  }
}
```

### 4.5 创建访问者

先观察一下接口`SQLASTVisitor`:

```java
public interface SQLASTVisitor {

    default void endVisit(SQLAllColumnExpr x) {
    }

    default void endVisit(SQLBetweenExpr x) {
    }

    default void endVisit(SQLBinaryOpExpr x) {
    }
    
    default boolean visit(SQLAllColumnExpr x) {
        return true;
    }

    default boolean visit(SQLBetweenExpr x) {
        return true;
    }

    default boolean visit(SQLBinaryOpExpr x) {
        return true;
    }
}
```

针对各种语法树节点, 提供了两个方法`visit`和`endVisit`, 至于这俩方法的含义就不用我多说了

需要注意的是, `visit`方法返回值为布尔类型, 列举出下面一段代码, 就能明白它的作用:

```java
public class SQLSelectStatement extends SQLStatementImpl {
    
    protected void accept0(SQLASTVisitor visitor) {
        if (visitor.visit(this)) {
            if (this.select != null) {
                this.select.accept(visitor);
            }
        }
        visitor.endVisit(this);
    }
}
```

当`SQLSelectStatement`被访问时, 会先调用访问者访问自身

如果访问方法返回的是true, 则会继续执行, 让访问者访问它的属性`select`

**所以, 如果我们自己定义了访问`SQLSelectStatement`的方法, 又在其中手动访问了它的`select`, 返回的还是`true`**

**那就会访问两次`select`属性**

了解访问者机制后, 经过笔者的几番测试, 对4.1中提到的`SQLExpr`有了理解:

1. `SQLExprTableSource`: 数据库表的表达式, 可以提取表名/别名
2. `SQLIdentifierExpr`: 确定表达式, 除了文档中的`id = 3`之外, 还有`select name from t_user`的`name`
3. `SQLAllColumnExpr`: 查询全部列表达式, 就是`select *`里的`*`
4. `SQLPropertyExpr`: 属性表达式, 例如`select t.name from t_user`中的`t.name`, 它的`owner`属性值为`t`
5. `SQLMethodInvokeExpr`: 函数表达式, 例如`select concat(name, email)`中的`concat(name, email)`
6. `SQLCharExpr`: 查询条件的字符串参数表达式, 例如`where name = 'Houtaroy'`中的`'Houtaroy'`
7. `SQLVariantRefExpr`: 查询条件的变体表达式, 例如`where name = #{name}`中的`#{name}`

十分幸运, 所有的需求都可以对照上一个`SQLExpr`, 极大减少了开发的工作量

摸清楚这些内容后, 直接编写我们的访问者吧!

```java
package cn.houtaroy.java.lib.sql.analyzer;

import com.alibaba.druid.sql.ast.expr.SQLAllColumnExpr;
import com.alibaba.druid.sql.ast.expr.SQLCharExpr;
import com.alibaba.druid.sql.ast.expr.SQLIdentifierExpr;
import com.alibaba.druid.sql.ast.expr.SQLMethodInvokeExpr;
import com.alibaba.druid.sql.ast.expr.SQLPropertyExpr;
import com.alibaba.druid.sql.ast.expr.SQLVariantRefExpr;
import com.alibaba.druid.sql.ast.statement.SQLExprTableSource;
import com.alibaba.druid.sql.ast.statement.SQLSelectItem;
import com.alibaba.druid.sql.ast.statement.SQLSelectQueryBlock;
import com.alibaba.druid.sql.visitor.SQLASTVisitor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 查询语句访问者
 * 只适用于select语句, 可以获取查询列名与查询参数
 * 查询参数书写格式为#{[a-zA-z]}
 *
 * @author Houtaroy
 */
@Data
@SuppressWarnings("PMD")
public class SelectASTVisitor implements SQLASTVisitor {

  public static final Pattern PARAMETER_PATTERN = Pattern.compile("#\\{[a-zA-z]*}");
  private static final int PARAMETER_START_INDEX = 2;

  protected List<SQLSelectItem> selectItems = new ArrayList<>();
  protected List<SelectTable> selectTables = new ArrayList<>();
  protected List<SelectColumn> selectColumns = new ArrayList<>();
  protected List<String> parameters = new ArrayList<>();

  @Override
  public void endVisit(SQLSelectQueryBlock x) {
    computeSelectColumns();
  }

  @Override
  public boolean visit(SQLExprTableSource x) {
    selectTables.add(new SelectTable(x));
    return false;
  }

  @Override
  public boolean visit(SQLCharExpr x) {
    computeParameter(x.toString());
    return false;
  }

  @Override
  public boolean visit(SQLSelectItem x) {
    selectItems.add(x);
    return false;
  }

  @Override
  public boolean visit(SQLVariantRefExpr x) {
    computeParameter(x.getName());
    return false;
  }

  /**
   * 访问查询参数表达式, 匹配查询参数
   *
   * @param expr 查询参数表达式
   */
  protected void computeParameter(String expr) {
    Matcher matcher = PARAMETER_PATTERN.matcher(expr);
    if (matcher.find()) {
      String match = matcher.group();
      parameters.add(match.substring(PARAMETER_START_INDEX, match.length() - 1));
    }
  }

  /**
   * 计算查询列
   */
  protected void computeSelectColumns() {
    selectItems.forEach(item -> {
      String alias = item.getAlias();
      if (item.getExpr() instanceof SQLIdentifierExpr) {
        SQLIdentifierExpr expr = (SQLIdentifierExpr) item.getExpr();
        selectColumns.add(new SelectColumn(selectTables.get(0).getName(), expr.getName(), alias));
      } else if (item.getExpr() instanceof SQLAllColumnExpr) {
        SQLAllColumnExpr expr = (SQLAllColumnExpr) item.getExpr();
        selectColumns.add(new SelectColumn(selectTables.get(0).getName(), expr.toString(), alias));
      } else if (item.getExpr() instanceof SQLMethodInvokeExpr) {
        SQLMethodInvokeExpr expr = (SQLMethodInvokeExpr) item.getExpr();
        selectColumns.add(new SelectColumn(null, expr.toString(), alias));
      } else if (item.getExpr() instanceof SQLPropertyExpr) {
        SQLPropertyExpr expr = (SQLPropertyExpr) item.getExpr();
        selectColumns.add(new SelectColumn(getSelectTableNameByAlias(expr.getOwnerName()), expr.getName(),
          item.getAlias()));
      }
    });
  }

  /**
   * 根据查询表别名获取查询表名
   * getSelectTableNameByAlias("t") -> "t_user" or null
   *
   * @param alias 查询表别名
   * @return 查询表名
   */
  protected String getSelectTableNameByAlias(String alias) {
    return getSelectTableByAlias(alias).map(SelectTable::getName).orElse(null);
  }

  /**
   * 根据查询表别名获取查询表
   *
   * @param alias 查询表别名
   * @return 查询表
   */
  protected Optional<SelectTable> getSelectTableByAlias(String alias) {
    return selectTables.stream().filter(table -> alias.equals(table.getAlias())).findFirst();
  }
}

```

### 4.6 SQL注入检查

Druid提供了`WallProvider`, 用于检查SQL语句, 并贴心的为我们准备了各种实现

使用代码很简单, 以MySQL为例:

```java
String sql = "select * from t_user where id = '1' and '1'='1'";
WallProvider provider = new MySqlWallProvider();
WallCheckResult result = provider.check(sql);
if (result.getViolations().isEmpty()) {
    // 无SQL注入风险和错误, 可执行查询
}
```

是不是非常好理解?在这里就不着过多笔墨了

## 5 总结

最后总结下本次实践中学习到的知识:

1. 抽象语法树
2. 访问者模式
3. Druid SQL Parser
4. Druid WallProvider
5. 根据实际需求进行技术选型, **没有银弹**

笔者后续还做了一些其它工作, 各位也可以进行思考拓展:

1. 如何获取查询列的数据类型?
2. 能否推断出查询参数的数据类型?
3. `WallProvider`可否进行单例模式封装?

所有代码均上传至[Github](https://github.com/Houtaroy/java-lab)

我是Houtaroy, 哪怕只有一行代码可以为他人提供帮助, 那也是在下毕生的荣幸

