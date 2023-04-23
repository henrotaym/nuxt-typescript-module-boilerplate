export default defineNuxtConfig({
  modules: ["../src/module"],
  {MODULE_CONFIG_KEY}: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
});
