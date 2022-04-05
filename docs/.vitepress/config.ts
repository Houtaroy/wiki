import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Houtaroy Wiki",
  description: "给时光以生命, 而不是给生命以时光",
  base: "/wiki/",
  themeConfig: {
    nav: [
      {
        text: "技术栈",
        items: [
          {
            text: "Java",
            link: "/java/base",
          },
          {
            text: "vue",
            link: "/vue/base",
          },
        ],
      },
      {
        text: "培训记录",
        link: "/training-record/micro-service",
        activeMatch: "^/training-record/",
      },
    ],
    sidebar: {
      "/java/": getJavaSidebar(),
      "/vue/": getVueSidebar(),
      "/training-record": getTrainingRecordSidebar(),
    },
  },
});

function getJavaSidebar() {
  return [
    {
      text: "Java",
      children: [
        { text: "基础知识", link: "/java/base" },
        { text: "进阶知识", link: "/java/advanced" },
        { text: "开发手册", link: "/java/standard" },
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

function getVueSidebar() {
  return [
    {
      text: "Vue",
      children: [{ text: "基础知识", link: "/vue/base" }],
    },
  ];
}
