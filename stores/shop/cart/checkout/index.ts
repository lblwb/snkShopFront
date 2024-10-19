import {defineStore} from 'pinia';
// @ts-ignore

export const useCartCheckoutStore = defineStore('cartCheckoutStore', {
    state: () => ({}),

    actions: {
        async fetchOrderCheckout(payload: { data: any }) {
            try {
                console.debug("payload", payload.data);
                const {$axios} = useNuxtApp();
                // @ts-ignore
                const result: { data: { success, order, error, payment_link } } = await $axios.post(`/api/v1/order/checkout`,
                    payload.data, {});
                //
                console.debug("created-order", result);

                return result.data;
            } catch (e) {
                console.debug("error in fetch [cat] products")
                return {error: "not avail order, retry again"}
            }
        },
    },

    getters: {}
});