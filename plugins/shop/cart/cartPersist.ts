// plugins/cartPersist.ts
// @ts-ignore
import {useCartStore} from '~/stores/shop/cart/index';

export default defineNuxtPlugin(() => {
    const cartStore = useCartStore();

    // Функция для загрузки данных из localStorage
    const loadCartFromLocalStorage = () => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            cartStore.items = parsedData.items;
            cartStore.comboId = parsedData.comboId;
        }
    };

    // Функция для сохранения данных в localStorage
    const saveCartToLocalStorage = () => {
        const cartData = {
            items: cartStore.items,
            comboId: cartStore.comboId
        };
        localStorage.setItem('cart', JSON.stringify(cartData));
    };

    // Загрузка данных при инициализации
    loadCartFromLocalStorage();

    // Сохранение данных при изменении состояния корзины
    cartStore.$subscribe(() => {
        saveCartToLocalStorage();
    });
});