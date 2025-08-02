// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-08-02",
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  css: ["~/assets/styles/index.scss"],
  typescript: { typeCheck: "build" },
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
    defaultLocale: "de",
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
