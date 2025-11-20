// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxtjs/color-mode'],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'slack-ochin',
            dark: 'slack-dark',
          }
        }
      }
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})