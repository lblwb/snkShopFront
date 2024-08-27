import {useShopCat} from "~/stores/shop/catalog/categories/index";

export default defineNuxtPlugin(() => {
    const catShopStore = useShopCat();
    //
    catShopStore.fetchAllCat();
});