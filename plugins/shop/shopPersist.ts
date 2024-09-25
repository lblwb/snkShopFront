import {useShopCat} from "~/stores/shop/catalog/categories/index";
import {useShopProductRecom} from "~/stores/shop/catalog/products/recom";

export default defineNuxtPlugin(() => {
    const catShopStore = useShopCat();
    const shopProductRecom = useShopProductRecom();
    //
    catShopStore.fetchAllCat();
    shopProductRecom.fetchRecProducts();
});