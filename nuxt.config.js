export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
 

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'countrylist-frontend',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.css"
    //"~/assets/css/main.css"
  ],
  js: [
    "~/assets/css/bootstrap.min.js"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'@/plugins/bootstrap-vue',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Simple usage
    '@nuxtjs/bootstrap-vue',
    'bootstrap-vue/nuxt',
    
    // With options
    ['@nuxtjs/bootstrap-vue', { css: false }],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }


  
}
/*
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:7052',
        changeOrigin: true
      },
    }
  }
}
*/