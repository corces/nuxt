
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}
        ],

        script: [
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
        'element-ui/lib/theme-chalk/index.css',
        '~/semantic/dist/semantic.min.css'
    ],

    axios: {
        baseURL: 'http://localhost:8080/api/'

    },

    router: {
        middleware: ['auth']
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'auth/login', method: 'post', propertyName: 'token' },
                    user: { url: 'auth/me', method: 'get', propertyName: 'data' },
                    logout: false
                },
                tokenType: ''
            }
        }
    },


    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules

    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],


  /*
  ** Build configuration
  */
    build: {
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
}
