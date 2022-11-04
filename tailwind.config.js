const path = require("path");

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
    extend: {
      colors: {
        black: "black",
        "color-primary": "hsl(var(--color-primary) / <alpha-value>)",
        "raw-seinna": "hsl(var(--raw-seinna) / <alpha-value>)",
        "bg-primary": "hsl(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "hsl(var(--bg-secondary) / <alpha-value>)",
      },
      boxShadow: {
        "inset-shadow":
          "box-shadow: inset 9px -6px rgb(var(--sizzling-sunrise) / <alpha-value>)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
