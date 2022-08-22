import blog, {
  ga,
  redirects,
  h,
} from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "えむいーと愉快な仲間たち",
  description: "VuePressに希望がなさすぎるので移行中",
  avatar: "assets/03.png",
  avatarClass: "rounded-full",
  author: "tkgstrator",
  // dateStyle: "long",
  lang: "ja",
  links: [
    { title: "Email", url: "mailto:nasawake.am@gmail.com" },
    { title: "GitHub", url: "https://github.com/tkgstrator" },
    { title: "Twitter", url: "https://twitter.com/tkgling" },
  ],
  // middlewares: [ga("UA-111335437-2"), redirects({})],
});
