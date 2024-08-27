import {defineStore} from "pinia";
import { getImageUrl } from "~/utils/assets/img";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopProductRecom = defineStore('shopProductRecomStore', {
    state: () => ({
        products: {
            recom: {
                data: [
                    {
                        id: 15,
                        name: "New Balance NB 550 D",
                        image_src: getImageUrl("products/test.png"),
                        price: 1120,
                        currency: "$"
                    },
                    {
                        id: 10,
                        name: "New Balance NB 550 D",
                        image_src: getImageUrl("products/test.png"),
                        price: 1120,
                        currency: "$"
                    },
                    {
                        id: 1,
                        name: "New Balance NB 550 D",
                        image_src: getImageUrl("products/test.png"),
                        price: 1120,
                        currency: "$"
                    },
                    {
                        id: 45,
                        name: "New Balance NB 550 D",
                        image_src: getImageUrl("products/test.png"),
                        price: 1120,
                        currency: "$"
                    },
                    {
                        id: 24,
                        name: "New Balance NB 550 D",
                        image_src: getImageUrl("products/test.png"),
                        price: 1120,
                        currency: "$"
                    },

                ]
            }
        },
    }),
    actions: {
        async fetchAllCat() {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {categories}} = await $axios.get('/api/v1/cat/all', {});
                console.log(categories);
                this.cat.all.data = categories;
            } catch (e) {
                console.debug("error in fetch Cat")
            }
        }
    },
    getters: {
        getProductsRecAll(): any {
            return this.products.recom.data;
        }
    }
});