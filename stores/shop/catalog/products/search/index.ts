import {defineStore} from "pinia";
// @ts-ignore
import {RouteParamValue} from "vue-router";

// http://127.0.0.1:8000/api/v1/products/all

// @ts-ignore
export const useShopSearchPrd = defineStore('shopShopSearchPrd', {
    state: () => ({
        products: {
            search: {
                info: {
                    text: ""
                },
                data: []
            },
        },
    }),
    actions: {
        async setSearchText(full_text: string) {
            this.products.search.info.text = full_text;
        },
        async fetchBySearchText(full_text: string) {
            if (full_text == "") {
                return []
            }
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {products, success}} = await $axios.get(`/api/v1/products/lookup`, {
                    params: {
                        text: full_text,
                    }
                });
                console.log(products);
                this.products.search.data = products;
            } catch (e) {
                console.debug("error in fetch search [products]")
            }
        },
    },
    getters: {
        getPrdBySchTextData(): any {
            return this.products.search.data;
        },
        getPrdSchText(): string {
            return this.products.search.info.text;
        },
    }
});