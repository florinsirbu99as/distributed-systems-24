export default {
  // Server configuration for Docker
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000       // Internal container port
  },

  head: {
    title: 'frontend-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/shopping.js',
  ],

  // Auto import components
  components: true,

  // Build and dev modules
  buildModules: [],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/dotenv',  // Load environment variables from .env file
    '@nuxtjs/axios',
  ],

  // Axios configuration
  axios: {
    baseURL: process.env.API_URL || 'http://backend:3000/api/v1', // Updated fallback URL to match backend service
  },

  // Runtime environment variables
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL || 'http://backend:3000/api/v1',
    }
  },

  // Build configuration
  build: {},

  // Enable SSR
  ssr: true, // Ensure that server-side rendering is enabled
}
