import {defineStore} from "pinia";

// http://127.0.0.1:8000/api/v1/cat/all

// @ts-ignore
export const useShopCat = defineStore('shopCatStore', {
    state: () => ({
        cat: {
            all: {
                data: [
                    {
                        "idx": "8215598f-300b-49ef-b6ad-ad368769d7b2",
                        "name": "CrocksSnk",
                        "slug": "crocks_snk"
                    },
                    {
                        "idx": "01fde573-041e-46a2-9661-7064b1eb944d",
                        "name": "DevSnk",
                        "slug": "dev_snk"
                    },
                    {
                        "idx": "e74999b6-341a-4e40-b7ca-570de9f8c2c3",
                        "name": "AppSnk",
                        "slug": "app_snk"
                    },
                    {
                        "idx": "426ada11-38fb-44b1-9d72-d1575e8580f5",
                        "name": "GoSnk",
                        "slug": "go_snk"
                    }
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
        getAllCat(): any {
            return this.cat.all.data;
        }
    }
});