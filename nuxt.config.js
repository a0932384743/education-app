import en from './locales/en.json'
import zhTW from './locales/zh-tw.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  router: {
    base: '/',
    linkExactActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve('./pages/error.vue'),
      })
    },
  },
  head: {
    titleTemplate: '%s - TWAREN 100G INMS',
    title: 'TWAREN 100G INMS',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TWAREN 100G INMS' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/scrollbar.css', '~/assets/css/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/echarts', '~/plugins/draggable'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  pageTransition: 'fade',

  typescript: {
    typeCheck: false,
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'zh-tw',
        iso: 'zh-tw',
        name: '中文',
      },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'zh-tw',
    vueI18n: {
      fallbackLocale: 'zh-tw',
      messages: {
        en,
        'zh-tw': zhTW,
      },
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        dark: {
          primary: '#0807B7',
          info: '#3F7EA1',
          success: '#01A559',
          warning: '#F99C0A',
          danger: '#B81003',
          secondary: '#D0CDCA',
          background: '#141844',
          header: '#0b0d26',
          aside: '#00201c',
        },
        light: {
          primary: '#0807B7',
          info: '#3F7EA1',
          success: '#01A559',
          warning: '#F99C0A',
          danger: '#e81707',
          secondary: '#D0CDCA',
          background: '#FFFFFF',
          header: 'white',
          aside: '#00201c',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
