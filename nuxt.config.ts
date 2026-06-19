// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-19",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@sit-onyx/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode"],
  css: [
    "~/assets/css/index.scss",
    "@fontsource-variable/playfair-display",
    "@fontsource-variable/inter",
    "@fontsource/dm-mono",
  ],
  i18n: {
    defaultLocale: "en-US",
    locales: [{ code: "en-US", file: "en-US.json", name: "English" }],
  },
  nitro: {
    compressPublicAssets: true,
  },
});
