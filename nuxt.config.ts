// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-19",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@sit-onyx/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode", "@nuxt/content"],
  css: [
    "~/assets/css/index.scss",
    "@fontsource-variable/playfair-display",
    "@fontsource-variable/inter",
    "@fontsource/dm-mono",
  ],
  app: {
    head: {
      title: "Lars Rickert - Software Engineer",
    },
  },
  i18n: {
    defaultLocale: "en-US",
    locales: [{ code: "en-US", file: "en-US.json", name: "English" }],
  },
  content: {
    experimental: { sqliteConnector: "native" },
  },
  nitro: {
    compressPublicAssets: true,
  },
});
