// https://nuxt.com/docs/api/configuration/nuxt-config

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
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {property: 'og:site_name', content: 'Sneaker Shop'},
                // {property: 'og:image', content: ''},
                // {property: 'og:url', content: ''},
                {property: "og:type", content: "profile"},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
            script: [{src: 'https://telegram.org/js/telegram-web-app.js'}],
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
    modules: ["@pinia/nuxt", '@nuxt/image', '@nuxtjs/device'],

    plugins: [
        "~/plugins/http/axios.ts",
        "~/plugins/tma",
        "~/plugins/shop/shopPersist",
        "~/plugins/shop/cart/cartPersist",
    ],

    compatibilityDate: '2024-08-26'
})