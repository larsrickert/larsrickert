// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-09-07",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@sit-onyx/nuxt", "@nuxtjs/i18n", "@nuxt/eslint", "@nuxtjs/color-mode"],
  css: ["~/assets/css/index.scss"],
  app: {
    head: {
      titleTemplate: "%s | Lars Rickert",
      link: [{ rel: "icon", href: "favicon.svg" }],
    },
  },
  i18n: {
    defaultLocale: "en-US",
    locales: [
      { code: "en-US", file: "en-US.json", name: "English" },
      { code: "de-DE", file: "de-DE.json", name: "Deutsch" },
    ],
  },
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    compressPublicAssets: true,
  },
});
