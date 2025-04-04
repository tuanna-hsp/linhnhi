// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // generate: {
  //   routes: ["/"],
  // },

  ssr: false,

  css: ["~/assets/main.scss"],

  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "vuetify-nuxt-module",
  ],
});
