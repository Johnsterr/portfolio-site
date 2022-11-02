import * as path from "path";

const srcDir = path.join(__dirname); // without / on end

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    `${srcDir}/assets/**/*.css`,
    `${srcDir}/components/**/*.vue`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{vue,js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/*.{vue,js,ts}`,
    `${srcDir}/nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
