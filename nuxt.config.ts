import { defineNuxtConfig } from "nuxt/config";
import { storageThemeModeKey } from "./shared/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: [
    {
      path: "~/components",
    },
  ],
  //css: ["~/assets/css/tailwind.css"],
  build: {},
  modules: ["@nuxtjs/color-mode"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    storageKey: storageThemeModeKey,
  },
});
