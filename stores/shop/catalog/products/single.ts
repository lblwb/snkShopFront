import {defineStore} from "pinia";
// @ts-ignore
import {RouteParamValue} from "vue-router";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopPrdSingle = defineStore('shopSinglePrdStore', {
    state: () => ({
        product: {
            single: {
                // info: {},
                data: {}
            },
        },
    }),
    actions: {
        async fetchPrdDetailBySlug(slug: string | RouteParamValue[]) {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {product, cat}} = await $axios.get(`/api/v1/products/detail/${slug}`, {});
                console.log(product);
                this.product.single.data = product;
                // this.product.single.data['image_src'] = "https://cdn.shopify.com/s/files/1/0153/8285/products/red-cat-1.jpg";
                this.product.single.data['attributes'] = [{name: 'Color', value: 'Red', code: '1'}];
                // this.cat.single.info = cat;
            } catch (e) {
                console.debug("error in fetch [cat] products")
            }
        },
    },
    getters: {
        getSingleProduct(): any {
            return this.product.single.data;
        }
    }
});