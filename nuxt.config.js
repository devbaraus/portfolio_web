const manifest = {
  name: 'Portfólio DevBaraus',
  short_name: 'DevBaraus',
  description: 'Meu nome é Bruno de Araújo Alves e este é meu portfólio.',
  lang: 'pt-BR',
  display: 'standalone',
  background_color: '#f0f0f7',
  theme_color: '#EE5622',
}

export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  pwa: {
    manifest,
  },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  // mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: manifest.name || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: manifest.description || process.env.npm_package_description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Ubuntu:wght@700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/css/devicons/devicon.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/feather-icons/style.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/custom-icons/style.css',
      },
    ],
    script: [
      // { src: 'https://profile.codersrank.io/widget/widget.js', body: true },
      // { src: 'https://unpkg.com/github-card@1.2.1/dist/widget.js', body: true },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-175567899-1',
      },
    ],
    ['vue-scrollto/nuxt', { duration: 200, force: true, easing: 'linear' }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

    // Doc: https://github.com/nuxt/content
    // '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'https://portfolio-serverapi.herokuapp.com/',
    baseURL: 'http://192.168.15.45:3333/',
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
