// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-31',  // mejor usar la fecha que recomienda la consola
  devtools: { enabled: true },
  css: ['@/assets/sass/main.scss'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap' 
        }
      ]
    }
  }
})

