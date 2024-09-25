import {defineStore} from "pinia";
import {getImageUrl} from "~/utils/assets/img";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopCombsPrdRecom = defineStore('shopCombsPrdRecomStore', {
    state: () => ({
        combos: {
            recom: {
                data: []
            }
        },
    }),
    actions: {
        async fetchCombosRecProducts() {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {combos}} = await $axios.get('/api/v1/combos/list', {});
                //console.log(products);
                this.combos.recom.data = combos;
            } catch (e) {
                console.debug("error in fetch Rec Products")
            }
        }
    },
    getters: {
        getCombosRecAll(): any {
            return this.combos.recom.data;
        }
    }
});