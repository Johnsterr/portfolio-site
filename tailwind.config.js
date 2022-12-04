const path = require("path");

const srcDir = path.join(__dirname); // without / on end

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    `${srcDir}/assets/**/*.css`,
    `${srcDir}/components/**/*.{vue,js,ts,jsx,tsx}`,
    `${srcDir}/layouts/**/*.{vue,js,ts,jsx,tsx}`,
    `${srcDir}/pages/**/*.{vue,js,ts,jsx,tsx}`,
    `${srcDir}/composables/**/*.{vue,js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/*.{vue,js,ts,jsx,tsx}`,
    `${srcDir}/nuxt.config.{js,ts}`,
    `${srcDir}/app.vue`,
  ],
  theme: {
    extend: {
      colors: {
        black: "black",
        "color-primary": "rgb(var(--color-primary) / <alpha-value>)",
        "color-secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "raw-seinna": "hsl(var(--raw-seinna) / <alpha-value>)",
        "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
