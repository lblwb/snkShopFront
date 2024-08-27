<template>
  <div v-if="product" class="productCardItem">

    <div class="productCardContainer">
      <div class="productCardInfo" @click="$router.push({name: 'catalog-product-slug', params: {slug: product.id}})" v-haptic-engine>
        <div class="productCardImg">
          <img :src="product.image_src" :alt="product.name" class="productCardImage"/>
        </div>
        <div class="productCardPrice">{{ product.price }}$</div>
        <div class="productCardName">{{ product.name }}</div>
      </div>

      <div class="productCardAction">
        <div class="productCardActionWrapper">
          <div class="productCardActionsQtyAddMinus">
            <div class="qtyAddMinusBtn">
              <button @click="decreaseQuantity(product.id)"
                      class="productCardButton"
                      :class="{'__Disabled': getProductQty(product.id) < 1}"
                      :disabled="getProductQty(product.id) === 0" v-haptic-engine>
                <span class="qtyAddMinusBtnIcon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div class="productCardActionsQtyCount">
            <div class="productCardActionsQtyCountWrapper">
              <div class="productCardActionsQtyCountTitle" :class="{'add-to-cart': getProductQty(product.id) === 0}">
                {{ getProductQty(product.id) === 0 ? 'Add to cart' : getProductQty(product.id) + ' Qty' }}
              </div>
            </div>
          </div>

          <div class="productCardActionsQtyAdd">
            <div class="qtyAddPlusBtn">
              <button @click="handleIncrease(product)" class="productCardButton" v-haptic-engine>
                <span class="qtyAddPlusBtnIcon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99998 3.33333V12.6667M3.33331 8H12.6666" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useCartStore} from '~/stores/shop/cart/index';

const cartStore = useCartStore();

const $router = useRouter();


export interface Product {
  id: string;
  name: string;
  image_src: string;
  currency: string;
  price: number;
}

// @ts-ignore
const props = defineProps<{
  product: Product;
}>();


const getProductQty = (productId: string) => cartStore.getProductQty(productId);
const handleIncrease = (product: any) => {
  setTimeout(() => {
    const existingQty = getProductQty(product.id);
    if (existingQty === 0) {
      cartStore.addItem(product);
    } else {
      cartStore.increaseQty(product.id)
    }
  }, 500);
};
const decreaseQuantity = (productId: string) => {
  setTimeout(() => {
    cartStore.decreaseQty(productId)
  }, 500);
};
</script>

<style scoped>
.productCardItem {
  flex: auto;
  min-width: calc((100% / 2) - 7px);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: calc((100% / 2) - 7px);
  border: solid 1px transparent;
  opacity: 0.9;
}

.productCardItem:hover,
.productCardItem:focus,
.productCardItem:active {
  opacity: 1;
  border: solid 1px #ccc;
}

.productCardContainer {
  padding: 6px;
}

.productCardImage {
  width: 100%;
  border-radius: 10px;
}

.productCardInfo {
  margin-bottom: 10px;
}

.productCardPrice {
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  color: #000000;
}

.productCardName {
  font-size: 12px;
  font-weight: 600;
  color: #555;
}

.productCardActions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
}

.productCardAction {
  background: #EFEFF4;
  padding: 6px 16px;
  border-radius: 16px;
}

.productCardActionWrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}


.productCardButton {
  border: none;
  background: transparent;
  color: #C42323;
}

.productCardButton:disabled,
.productCardButton.__Disabled {
  color: #000000 !important;
}

.productCardActionsQtyCount .productCardActionsQtyCountTitle {
  font-size: 12px;
  font-weight: 600;
}

.productCardActionsQtyCountTitle.add-to-cart {
  color: currentColor;
}
</style>