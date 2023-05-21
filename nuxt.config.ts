// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
       
    ],
    
    plugins: [
        '~/plugins/api.ts',
      
    ],

      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      runtimeConfig: {
        public:{
           baseURL: process.env.BASE_URL || 'http://localhost:3000',
        }
       },
      
   

})
