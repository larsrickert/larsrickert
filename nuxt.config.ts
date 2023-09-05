// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/styles/index.scss"],
  app: {
    head: {
      title: "Webentwicklung Lars Rickert",
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
      { code: "de", file: "de-DE.json" },
      { code: "en", file: "en-US.json" },
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
