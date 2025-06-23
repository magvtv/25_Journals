export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@vite-pwa/nuxt'
    ],
    css: ['~/assets/css/main.css'],
    app: {
      head: {
        title: 'Book Journal Studio - Extension of Your Mind',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                  { 
          name: 'description', 
          content: 'A modern, customizable journal platform for thinkers, planners, and creators. Not just a book. It\'s an extension of your mind.' 
        },
          { name: 'theme-color', content: '#1f2937' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
          { 
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', 
            rel: 'stylesheet' 
          }
        ]
      }
    },
    pwa: {
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,png,svg,ico}']
      },
      client: {
        installPrompt: true
      },
      manifest: {
        name: 'Book Journal Studio',
        short_name: 'Journal Studio',
        description: 'Extension of your mind - Premium journals for thinkers, planners, and creators',
        theme_color: '#1f2937',
        background_color: '#faf7f0',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    runtimeConfig: {
      public: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
      }
    },
    typescript: {
      strict: false,
      typeCheck: false
    }
  })