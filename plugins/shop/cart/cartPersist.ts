// plugins/cartPersist.ts
import {useCartStore} from '~/stores/shop/cart/index';
// @ts-ignore
import {useWebAppCloudStorage, useWebApp} from 'vue-tg';

export default defineNuxtPlugin(async () => {
    const {setStorageItem, getStorageItem} = useWebAppCloudStorage();
    const webApp = useWebApp();
    const cartStore = useCartStore();

    let intBgUpdCart = null;

    // Function to load cart from storage (cloud or local)
    const loadCart = async () => {
        try {
            let cartData;
            if (!webApp.isPlatformUnknown) {
                // Use CloudStorage
                cartData = await getStorageItem('shop_cart');
                // console.log('loadCartFromCloudStorage', cartData);
            } else {
                // Use localStorage
                cartData = localStorage.getItem('shop_cart');
                // console.log('loadCartFromLocalStorage', cartData);
            }

            if (cartData) {
                const parsedData = JSON.parse(cartData);
                cartStore.items = parsedData.items;
                cartStore.comboId = parsedData.comboId;
            }
        } catch (e) {
            console.error('Error loading cart from storage:', e);
        }
    };

    // Function to save cart to storage (cloud or local)
    const saveCart = async () => {
        try {
            const cartData = {
                items: cartStore.items,
                comboId: cartStore.comboId,
            };
            const cartDataString = JSON.stringify(cartData);

            if (!webApp.isPlatformUnknown) {
                // Use CloudStorage
                const result = await setStorageItem('shop_cart', cartDataString);
                console.log('saveCartToCloudStorage', cartData, 'result:', result);
            } else {
                // Use localStorage
                localStorage.setItem('shop_cart', cartDataString);
                console.log('saveCartToLocalStorage', cartData);
            }
        } catch (e) {
            console.error('Error saving cart to storage:', e);
        }
    };

    // Function to periodically update cart from storage
    const bgUpdStateStorage = async () => {
        intBgUpdCart = setInterval(async () => {
            let cartData;
            if (!webApp.isPlatformUnknown) {
                // Use CloudStorage
                cartData = await getStorageItem('shop_cart');
                console.log('loadCartFromCloudStorage', cartData);
            } else {
                // Use localStorage
                cartData = localStorage.getItem('shop_cart');
                console.log('loadCartFromLocalStorage', cartData);
            }

            if (cartData) {
                const parsedData = JSON.parse(cartData);
                if (JSON.stringify(cartStore.items) !== JSON.stringify(parsedData.items)) {
                    cartStore.items = parsedData.items;
                    cartStore.comboId = parsedData.comboId;
                }
            }
        }, 5000);
    };

    // await bgUpdStateStorage();

    // Load cart when the plugin is initialized
    await loadCart();

    // Save cart to storage when cartStore changes
    cartStore.$subscribe(async () => {
        await saveCart();
    });
});