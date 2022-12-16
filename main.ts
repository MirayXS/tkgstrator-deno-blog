import blog, {
  ga,
  redirects,
  h,
} from "https://raw.githubusercontent.com/tkgstrator/deno_blog/main/blog.tsx";
import "https://esm.sh/prismjs@1.28.0/components/prism-swift.min?no-check";
import "https://esm.sh/prismjs@1.28.0/components/prism-typescript.min?no-check";
import "https://esm.sh/prismjs@1.28.0/components/prism-python.min?no-check";
import "https://esm.sh/prismjs@1.28.0/components/prism-bash.min?no-check";
import "https://esm.sh/prismjs@1.28.0/components/prism-json.min?no-check";
import "https://esm.sh/prismjs@1.28.0/components/prism-scheme.min?no-check";

blog({
  title: "ぼっち・ざ・えむいー",
  description: "スターライトアーニャです",
  avatar: "/assets/ico_ep2_01.png",
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
  middlewares: [ga("UA-111335437-2"), redirects({})],
});
