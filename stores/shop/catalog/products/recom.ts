import {defineStore} from "pinia";
import {getImageUrl} from "~/utils/assets/img";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopProductRecom = defineStore('shopProductRecomStore', {
    state: () => ({
        products: {
            recom: {
                data: []
            }
        },
    }),
    actions: {
        async fetchRecProducts() {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {products}} = await $axios.get('/api/v1/products/rec/all', {});
                //console.log(products);
                this.products.recom.data = products;
            } catch (e) {
                console.debug("error in fetch Rec Products")
            }
        }
    },
    getters: {
        getProductsRecAll(): any {
            return this.products.recom.data;
        }
    }
});