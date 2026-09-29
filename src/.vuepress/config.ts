import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/algorithm/",

  lang: "zh-CN",
  title: "算法再入门",
  description: "算法入门学习笔记",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
