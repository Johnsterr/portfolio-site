import { defineNuxtConfig } from "nuxt/config";
import { storageThemeModeKey } from "./fsd/shared/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: [
    {
      path: "~/components",
    },
    {
      path: "~/fsd/shared/ui",
    },
  ],
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
