import {defineStore} from "pinia";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopCat = defineStore('shopCatStore', {
    state: () => ({
        cat: {
            single: {
                data: []
            },
            all: {
                data: []
            }
        },
    }),
    actions: {
        async fetchAllCat() {
            try {
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const {data: {categories}} = await $axios.get('/api/v1/cat/all', {});
                // console.log(categories);
                this.cat.all.data = categories;
            } catch (e) {
                console.debug("error in fetch Cat")
            }
        }
    },
    getters: {
        getAllCat(): any {
            return this.cat.all.data;
        }
    }
});