import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/news/",
  {
    text: "Material",
    icon: "book-medical",
    prefix: "/material/",
    children: [
      {
        text: "Brochure",
        icon: "file-image",
        link: "/",
      },
      {
        text: "Slide",
        icon: "file-powerpoint",
        link: "/",
      },
      "agenda",
    ],
  },
  {
    text: "About Us",
    icon: "user",
    prefix: "/about/",
    children: [
      {
        text: "University",
        icon: "university",
        link: "https://www.ujs.edu.cn/",
      },
      "team",
    ],
  },
]);
