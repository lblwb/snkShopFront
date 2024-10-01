import {defineStore} from 'pinia';

// @ts-ignore


// interface ICartBAccStore {
//     rec: {
//         data: {
//             name: string,
//             data_source: string | null,
//             active: boolean
//         }
//     }
// }

export const useCartBAccStore = defineStore('cartBAccStore', {
    state: () => ({
        rec: {
            data: undefined
        }
    }),

    actions: {
        async fetchBankRec(amt: number) {
            try {
                if (this.rec.data === undefined) {
                    const {$axios} = useNuxtApp();
                    // @ts-ignore
                    const {data: {rec}} = await $axios.get(`/api/v1/pay/rec`, {
                        params: {
                            amt: amt
                        }
                    });
                    //
                    this.rec.data = rec
                    console.debug("acc", rec);
                } else {
                    console.debug("acc-exist", this.rec.data);
                    return this.rec.data;
                }
            } catch (e) {
                console.debug("error in fetch [brec] products")
            }
        },
    },

    getters: {
        getRec(): any {
            return this.rec.data ? this.rec.data : null;
        }
    }
});