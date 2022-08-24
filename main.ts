import blog, {
  ga,
  redirects,
  h,
} from "https://raw.githubusercontent.com/tkgstrator/deno_blog/main/blog.tsx";

blog({
  title: "まちカドえむいー",
  description: "スターライトアーニャです",
  avatar: "/assets/03.png",
  avatarClass: "rounded-full",
  author: "tkgstrator",
  // cover: "https://tkgstrator.deno.dev/assets/header.jpeg",
  // dateStyle: "long",
  lang: "ja",
  links: [
    { title: "Email", url: "mailto:nasawake.am@gmail.com" },
    { title: "GitHub", url: "https://github.com/tkgstrator" },
    { title: "Twitter", url: "https://twitter.com/tkgling" },
  ],
  ogImage: {
    url: "https://tkgstrator.deno.dev/assets/header.jpeg",
    twitterCard: "summary",
  },
  favicon: "/assets/favicon.ico",
  entries: 10,
  // middlewares: [ga("UA-111335437-2"), redirects({})],]
});
