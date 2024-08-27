// plugins/cartPersist.ts
import {useCartStore} from '~/stores/shop/cart/index';
// @ts-ignore
import {useWebAppCloudStorage, useWebAppHapticFeedback} from 'vue-tg';

export default defineNuxtPlugin(async () => {
    const {setStorageItem, getStorageItem} = useWebAppCloudStorage();
    const cartStore = useCartStore();

    let intBgUpdCart = null;

    // Load cart from cloud storage
    const loadCartFromCloudStorage = async () => {
        try {
            const cartData = await getStorageItem('shop_cart');
            console.log("loadCartFromCloudStorage", cartData);


            if (cartData) {
                const parsedData = JSON.parse(cartData);
                cartStore.items = parsedData.items;
                cartStore.comboId = parsedData.comboId;
            }
        } catch (e) {
            console.error("Error loading cart from cloud storage:", e);
        }
    };

    // Save cart to cloud storage
    const saveCartToCloudStorage = async () => {
        try {
            const cartData = {
                items: cartStore.items,
                comboId: cartStore.comboId
            };
            const result = await setStorageItem('shop_cart', JSON.stringify(cartData));
            console.log("saveCartToCloudStorage", cartData, "result:", result);
        } catch (e) {
            console.error("Error saving cart to cloud storage:", e);
        }
    };

    const bgUpdStateCloudStorage = async () => {
        intBgUpdCart = setInterval(async () => {
            const cartData = await getStorageItem('shop_cart');
            console.log("loadCartFromCloudStorage", cartData);
            if (cartData) {
                const parsedData = JSON.parse(cartData);
                if (cartStore.items !== parsedData.items) {
                    cartStore.items = parsedData.items;
                    cartStore.comboId = parsedData.comboId;
                }
            }
        }, 5000);
    }

    // await bgUpdStateCloudStorage();

    // Load cart when the plugin is initialized
    await loadCartFromCloudStorage();

    // Save cart to cloud storage when cartStore changes
    cartStore.$subscribe(async () => {
        await saveCartToCloudStorage();
    });
});