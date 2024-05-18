// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  css: ["~/assets/styles/index.scss"],
  app: {
    head: {
      title: "Lars Rickert | Webentwicklung",
      link: [{ rel: "icon", href: "/favicon.svg" }],
      htmlAttrs: {
        class: "dark",
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  i18n: {
    lazy: true,
    defaultLocale: "de",
    langDir: "lang",
    detectBrowserLanguage: {
      useCookie: false,
    },
    locales: [
      { code: "de", file: "de-DE.json", name: "Deutsch" },
      { code: "en", file: "en-US.json", name: "English" },
    ],
    customRoutes: "config",
    pages: {
      imprint: {
        de: "/impressum",
        en: "/imprint",
      },
      "privacy-policy": {
        de: "/datenschutzerklaerung",
        en: "/privacy-policy",
      },
    },
  },
});
