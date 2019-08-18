
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'GielowKrebs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Remote Accounting. Anywhere.  GielowKrebs Accounting.  The Accounting Office' },
      { hid: 'og:image', name: 'og:image', content: 'https://gielowkrebs.com/images/Logo.jpg' },
      { hid: 'og:title', name: 'og:title', content: 'GielowKrebs' },
      { hid: 'og:url', name: 'og:url', content: 'https://gielowkrebs.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'GielowKrebs' },
      { hid: 'og:description', name: 'og:description', content: 'Remote Accounting. Anywhere.  GielowKrebs Accounting.  The Accounting Office' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://gielowkrebs.com/images/Logo.jpg' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'GielowKrebs' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://gielowkrebs.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Remote Accounting. Anywhere.  GielowKrebs Accounting.  The Accounting Office' }

    ],
    script: [
      { src: 'https://kit.fontawesome.com/1107c06a2b.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro' }
    ]
  },
  css: [
    { src: '@/assets/styles/app.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-svg-loader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
