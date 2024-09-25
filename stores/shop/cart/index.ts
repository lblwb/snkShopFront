import {defineStore} from 'pinia';
// @ts-ignore
import {Product} from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";

interface ProductCart {
    qty?: number;
    combo_id?: string;
    Product: Product;
}

interface CartState {
    items: ProductCart[];
    comboId: string | null;
}


export const useCartStore = defineStore('cartStore', {
    state: (): CartState => ({
        items: [], // Список товаров в корзине
        comboId: null, // ID текущего комбо, если в корзине добавлено комбо
    }),

    actions: {
        addItem(product: Product) {
            if (product.combo_id) {
                // if combo-kit
                if (this.comboId && this.comboId !== product.combo_id) {
                    // Показываем pop-up и очищаем корзину перед добавлением нового комбо-набора
                    this.showReplaceComboPopup(product);
                } else {
                    // if exist combo-kit
                    // Добавляем комбо-набор, если в корзине его еще нет
                    this.clearCart();
                    this.comboId = product.combo_id;
                    this.items.push({...product, qty: 1});
                }
            } else {
                // if add default product
                const existingItem = this.items.find((item: { idx: any; }) => item.idx === product.idx);
                if (existingItem) {
                    existingItem.qty = (existingItem.qty || 0) + 1;
                } else {
                    this.items.push({...product, qty: 1});
                }
            }
        },

        removeItem(productIdx: string) {
            const index = this.items.findIndex((item: { idx: string; }) => item.idx === productIdx);
            console.log("removeItem", index);
            // console.log(this.items);
            this.items.forEach((item: { idx: string; }) => {
                console.log(productIdx, item.idx, item.idx === productIdx)
            })

            // console.log("removeItem", this.items.find((item) => item.id === productId));

            if (index !== -1) {
                this.items.splice(index, 1);
                // Очищаем comboId, если убираем последний товар комбо-набора
                if (this.items.length === 0) {
                    this.comboId = null;
                }
            }
        },

        clearCart() {
            this.items = [];
            this.comboId = null;
        },

        increaseQty(productIdx: string) {
            const item = this.items.find((item: { idx: string; }) => item.idx === productIdx);
            if (item) {
                item.qty = (item.qty || 0) + 1;
            }
        },

        decreaseQty(productIdx: string) {
            const item = this.items.find((item: { idx: string; }) => item.idx === productIdx);
            if (item && item.qty && item.qty > 1) {
                item.qty -= 1;
            } else {
                this.removeItem(productIdx);
            }
        },

        getProductQty(productIdx: string): number {
            const item = this.items.find((item: { idx: string; }) => item.idx === productIdx);
            return item ? item.qty || 0 : 0;
        },

        showReplaceComboPopup(newComboProduct: Product) {
            // Логика отображения pop-up с подтверждением замены комбо-набора
            if (confirm('Your cart already contains a combo. Do you want to replace it with a new one?')) {
                this.clearCart();
                this.comboId = newComboProduct.combo_id || null;
                this.items.push({...newComboProduct, qty: 1});
            }
        }
    },

    getters: {
        getItems: (state): ProductCart[] => {
            return state.items
        },
        getTotalItems: (state): number => {
            return state.items.reduce((total: any, item: { qty: any; }) => total + (item.qty || 0), 0);
        },

        getTotalPrice: (state): number => {
            return state.items.reduce((total: number, item: { price: number; qty: any; }) => total + item.price * (item.qty || 0), 0);
        },

        isComboInCart: (state): boolean => {
            return !!state.comboId;
        }
    }
});