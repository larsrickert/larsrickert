// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/index.scss"],
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.svg" }],
    },
  },
});
