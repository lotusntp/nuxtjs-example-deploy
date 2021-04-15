export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hello-nuxt-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/axios', '@nuxtjs/auth'],

  axios: {
    baseURL: 'http://localhost:12345/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: 'login',
            propertyName: 'data.token',
          },
          user: {
            method: 'get',
            url: 'me',
            propertyName: 'data.user',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/login',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
