import {defineStore} from 'pinia';

export const useUserOrdersStore = defineStore('userOrdersStore', {
    state: () => ({
        user_orders: {
            user: {
                data: null
            },
            data: undefined
        }
    }),

    actions: {
        async fetchOrdersByUserAcc() {
            try {
                if (this.user_orders.data === undefined) {
                    const {$axios} = useNuxtApp();
                    // @ts-ignore
                    const {data: {user, orders}} = await $axios.get(`/api/v1/order/by_user`, {
                        params: {},
                        headers: {
                            // Authorization: `Bearer ${this.$auth.getToken()}`
                        }
                    });
                    //
                    this.user_orders.data = orders;
                    console.debug("acc", orders);
                } else {
                    console.debug("acc-exist", this.user_orders.data);
                    return this.rec.data;
                }
            } catch (e) {
                console.debug("error in fetch [brec] products")
            }
        },
    },

    getters: {
        getUserOrders(): any {
            return this.user_orders.data ? this.user_orders.data : null;
        }
    }
});