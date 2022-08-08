import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "えむいーと愉快な仲間たち",
  description: "VuePressに希望がなさすぎるので移行中",
  avatar: "assets/03.png",
  avatarClass: "rounded-full",
  author: "tkgstrator",
  links: [
    { title: "Email", url: "mailto:nasawake.am@gmail.com" },
    { title: "GitHub", url: "https://github.com/tkgstrator" },
    { title: "Twitter", url: "https://twitter.com/tkgling" },
  ],

  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
