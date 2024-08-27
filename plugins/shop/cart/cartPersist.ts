// plugins/cartPersist.ts
// @ts-ignore
import {useCartStore} from '~/stores/shop/cart/index';
// @ts-ignore
import {useWebAppCloudStorage} from "vue-tg";

export default defineNuxtPlugin(() => {
    const cartStore = useCartStore();
    const {setStorageItem, getStorageItem} = useWebAppCloudStorage();

     // Load to cloudStorage
    const loadCartFromLocalStorage = () => {
        const cartData = getStorageItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            cartStore.items = parsedData.items;
            cartStore.comboId = parsedData.comboId;
        }
    };

    // Save to cloudStorage
    const saveCartToLocalStorage = async () => {
        const cartData = {
            items: cartStore.items,
            comboId: cartStore.comboId
        };
        await setStorageItem('cart', JSON.stringify(cartData));
    };

    //load from cloud
    loadCartFromLocalStorage();
    // save to cloud
    cartStore.$subscribe(async () => {
        await saveCartToLocalStorage();
    });
});