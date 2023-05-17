// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [
        '@pinia/nuxt',
       
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
   

})
