// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Frontend Mentor | News Homepage",
      meta: [
        {
          name: "description",
          content: "A news frontpage with various articles on technology.",
        },
      ],
      htmlAttrs: { lang: "en" },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
