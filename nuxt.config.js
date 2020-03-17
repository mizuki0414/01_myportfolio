import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Mizuki Onogawa project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Mizuki Onogawa project' },
      { name: 'description', content: '小野川 瑞季のWebエンジニアとしてのポートフォリオサイトです。' },
      { name: 'og:url', content: '' },
      { name: 'og:title', content: 'Mizuki Onogawa project' },
      { name: 'og:description', content: '小野川 瑞季のWebエンジニアとしてのポートフォリオサイトです。' },
      { name: 'og:image', content: 'img/icon.jpg' },
      { name: 'og:site_name', content: 'Mizuki Onogawa project' },
      { name: 'twitter:site', content: 'Mizuki Onogawa project' },
      { name: 'og:locale', content: 'ja_JP' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */

  // router: {
  //   base: '/project/'
  // },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'vue-scrollto/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
      
    // },

  }
}
