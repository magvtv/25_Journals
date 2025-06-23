/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
      "./src/components/**/*.{js,vue,ts}",
      "./src/layouts/**/*.vue",
      "./src/pages/**/*.vue",
      "./node_modules/flowbite/**/*.{js,ts}"
    ],
    theme: {
      extend: {
              fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'marker': ['LXGW Marker Gothic', 'sans-serif'],
      },
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          journal: {
            cream: '#faf7f0',
            leather: '#8b4513',
            gold: '#d4af37',
            sage: '#9caf88',
            charcoal: '#36454f'
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'bounce-gentle': 'bounceGentle 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          }
        }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }