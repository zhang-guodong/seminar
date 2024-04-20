import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/seminar/",

  lang: "en-US",
  title: "ICCI",
  description: "International Congress of Cancer Immunotherapy",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
