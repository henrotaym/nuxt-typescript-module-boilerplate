export default defineNuxtConfig({
  modules: ["../src/module"],
  toasteo: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
});
