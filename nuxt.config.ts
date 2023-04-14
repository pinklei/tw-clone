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
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET,
    // Private keys are only available on the server
    apiSecret: '',
    // Public keys that are exposed to the client
    public: {
      apiBaseUrl: process.env.BASE_URL
    }
  },
})
  
