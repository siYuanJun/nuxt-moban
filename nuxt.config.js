export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-moban',
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
    proxy: true,
    prefix: '/api',
    baseURL: 'http://www.lvtcn.com/api'
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // proxy
  proxy: {
    '/api': {
      target: 'http://www.lvtcn.com',
      // secure: false,  // 如果是 https 接口，需要配置这个参数
      changeOrigin: true, // 为 false 个别项目接口无法访问
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
