import {defineStore} from "pinia";
// @ts-ignore
import {RouteParamValue} from "vue-router";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopPrdCat = defineStore('shopPrdCatStore', {
    state: () => ({
        cat: {
            single: {
                info: {},
                data: []
            },
        },
    }),
    actions: {
        async fetchByCatSlug(slug: string | RouteParamValue[]) {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {cat_products, cat}} = await $axios.get(`/api/v1/products/byCat/${slug}`, {});
                console.log(cat_products);
                this.cat.single.data = cat_products;
                this.cat.single.info = cat;
            } catch (e) {
                console.debug("error in fetch [cat] products")
            }
        },
    },
    getters: {
        getPrdByCat(): any {
            return this.cat.single.data;
        },
         getPrdBySingeCatInfo(): any {
            return this.cat.single.info;
        }

    }
});