import en from './assets/locales/en.json';
import zhTW from './assets/locales/zh-tw.json';
import { darkTheme, lightTheme } from './utils/themes';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
      });
    },
  },
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'zh-tw',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'FLVMRulvoa3fa1A_oPGRQTvTm8cx86Tuqwja1T-xdpQ',
      },
      { hid: 'description', name: 'description', content: 'AERO POWER' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.aeropower-fan.com.tw/' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400italic,700italic,400,300,700&subset=all',
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&family=Zen+Kaku+Gothic+New&display=swap'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/custom.css', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/snackbar'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    enter(el, done) {
      // 自定義進入動畫
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s';
        el.style.opacity = 1;
        done();
      }, 50);
    },
    leave(el, done) {
      // 自定義離開動畫
      el.style.opacity = 1;
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s';
        el.style.opacity = 0;
        done();
      }, 50);
    },
  },
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
  modules: [
    '@nuxtjs/i18n',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-56ML65M' }],
  ],
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
      options: { customProperties: true },
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    optionsPath: '~/plugins/vuetify/index.ts'
  },
  loading: { color: '#027afa' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  serverMiddleware: [
    { path: '/api/products', handler: '~/server/api/products.ts' }
  ]
};
