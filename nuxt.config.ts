// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  ssr: false,
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '',
    // Public keys that are exposed to the client
    public: {
      apiBaseUrl: ''
    }
  },
})
  
