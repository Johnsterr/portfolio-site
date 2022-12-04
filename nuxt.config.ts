import { defineNuxtConfig } from "nuxt/config";
import { storageThemeModeKey } from "./application/config/StorageThemeModeKey";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/tailwind.css"],
  build: {},
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    storageKey: storageThemeModeKey,
  },
});
