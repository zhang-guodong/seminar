import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/news/",
  {
    text: "Material",
    icon: "book-medical",
    prefix: "/material/",
    children: [
      "brochure",
      "poster",
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
