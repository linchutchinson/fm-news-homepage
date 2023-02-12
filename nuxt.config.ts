// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Frontend Mentor | News Homepage",
      link: [{ rel: "icon", href: "/favicon.png", sizes: "32x32" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
