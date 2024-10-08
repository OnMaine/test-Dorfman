export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],

  experimental: {
    typedPages: true
  },

  modules: [
    '@vueuse/nuxt',
    'unplugin-icons/nuxt'
  ],

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'The best CS2 skins marketplace!' }
      ],
      link: [
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon/android-chrome-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Roboto:wght@400;500&display=swap' },
        { rel: 'preload', as: 'font', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com/s/robotomono/v23/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2' },
        { rel: 'preload', as: 'font', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2' }
      ]
    }
  },

  compatibilityDate: '2024-10-08'
})