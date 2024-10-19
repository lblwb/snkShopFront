import {useUserStore} from "~/stores/userSession";


export default defineNuxtPlugin(() => {
    const userStore = useUserStore();
    // @ts-ignore
    // nuxtApp.vueApp.use("tma_init", {})
    // nuxtApp.vueApp
    userStore.fetchAndPushTgUser();
    userStore.fetchUserTokenAndPushCookie();
})