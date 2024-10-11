// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
// import Components from 'unplugin-vue-components/vite'
// @ts-ignore
// import { UnpluginVueComponentsResolver, UnpluginDirectivesResolver, UnpluginModulesResolver } from 'maz-ui/resolvers'


// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    devServer: {},

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [

                // {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
                {property: 'og:site_name', content: 'Sneaker Shop'},
                // {property: 'og:image', content: ''},
                // {property: 'og:url', content: ''},
                {property: "og:type", content: "profile"},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
            script: [
                {src: '/telegram-web-app.js'},
            ],
        },
    },

    vite: {
        pages: true,
        telemetry: false,
        appType: "spa"
    },

    mode: 'universal',
    target: 'static',
    ssr: false,
    spaLoadingTemplate: true,

    nitro: {
        ssr: false,
        preset: "static",
        static: true,
        distDir: 'dist',
    },


    //
    modules: [
        // ['@nuxtjs/dotenv', { systemvars: true }],
        "@pinia/nuxt",
        '@nuxt/image',
        '@nuxtjs/device',
        'maz-ui/nuxt'
    ],

    buildModules: [
        '@nuxtjs/dotenv'
    ],

    plugins: [
        "~/plugins/http/axios.ts",
        "~/plugins/tma",
        "~/plugins/shop/shopPersist",
        "~/plugins/shop/cart/cartPersist",
        "~/plugins/app/trigger/glbTapClick",
    ],

    compatibilityDate: '2024-08-26'
})