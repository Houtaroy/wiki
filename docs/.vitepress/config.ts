import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Houtaroy Wiki",
  description: "给时光以生命, 而不是给生命以时光",
  base: "/wiki/",
  themeConfig: {
    nav: [
      {
        text: "Java",
        link: "/java/",
        activeMatch: "^/java/",
      },
      {
        text: "培训记录",
        link: "/training-record/micro-service",
        activeMatch: "^/training-record/",
      },
    ],
    sidebar: {
      "/java/": getJavaSidebar(),
      "/training-record": getTrainingRecordSidebar(),
    },
    algolia: {
      appId: "BMO5G826VG",
      apiKey: "7963ad1fba44b711a1dae1958ef42590",
      indexName: "wiki",
    },
  },
});

function getJavaSidebar() {
  return [
    {
      text: "Java",
      children: [
        { text: "目录", link: "/java/" },
        { text: "开发手册", link: "/java/开发手册" },
        {
          text: "使用Druid解析SQL查询语句",
          link: "/java/使用Druid解析SQL查询语句",
        },
        {
          text: "SpringBoot整合钉钉SDK",
          link: "/java/SpringBoot整合钉钉SDK",
        },
        {
          text: "SpringCloud分布式事务Seata",
          link: "/java/SpringCloud分布式事务Seata",
        },
        {
          text: "SpringBoot整合Elasticsearch",
          link: "/java/SpringBoot整合Elasticsearch/",
        },
      ],
    },
  ];
}

function getTrainingRecordSidebar() {
  return [
    {
      text: "培训记录",
      children: [{ text: "微服务", link: "/training-record/micro-service" }],
    },
  ];
}
