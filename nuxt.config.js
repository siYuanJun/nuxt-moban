export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.VUE_APP_TITLE,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/style/normailze.less',
    '~/plugins/colorui/normailze.less',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  // axios 警告:当代理(proxy)选项被启用时，browserBaseURL 的默认值变成前缀，而不是 baseurl 定义用于客户端请求的基本URL。环境变量 API_URL_BROWSER 可以用来覆盖 browserBaseURL
  axios: {
    proxy: false,
    prefix: '/api',
    baseURL: process.env.BROWSER_BASE_URL
  },

  // 该对象的 objectValue 可以使用 this.$config 从客户端和服务器访问
  publicRuntimeConfig: {
    // axios: {
    //   browserBaseURL: process.env.BROWSER_BASE_URL
    // },
    apiSecret: 'xxxxx'
  },

  // 此对象的 objectValue 只能使用 $config 从服务器访问。覆盖服务器的 publicRuntimeConfig。
  privateRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL
    },
    apiSecret: process.env.API_SECRET
  },

  // test proxy
  proxy: {
    '/api': {
      target: process.env.BROWSER_BASE_URL,
      // secure: false,  // 如果是 https 接口，需要配置这个参数
      changeOrigin: true, // 如关闭可能接口出现异常
      pathRewrite: {
        '^/api': 'api',
        changeOrigin: true
      }
    }
  },

  // Initial loading css
  styleResources: {
    less: [
      './assets/style/variables.less', // 全局 less 变量
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['axios', '@nuxtjs/axios']
  }
}
