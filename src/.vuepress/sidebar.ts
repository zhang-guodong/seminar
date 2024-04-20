import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "News",
      icon: "newspaper",
      prefix: "news/",
      children: "structure",
    },
  ],
});
