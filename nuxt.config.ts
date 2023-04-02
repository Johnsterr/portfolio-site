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
  modules: ["@nuxtjs/color-mode", "@pinia/nuxt"],
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
  devServer: {
    port: 3030,
  },
  // typescript: {
  //   shim: false,
  // },
  vite: {
    css: {
      modules: {
        generateScopedName:
          process.env.NODE_ENV === "development"
            ? "[path]_[local]"
            : "[hash:base64:5]",
        localsConvention: "camelCase",
      },
    },
  },
});
