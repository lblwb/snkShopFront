<template>
  <div v-if="product" class="productCardItem">
    <!--    {{ product.image_src }}-->
    <div class="productCardContainer">
      <div class="productCardInfo"
           @click="$router.push({name: 'catalog-product-slug', params: {slug: product.idx}})"
           v-haptic-engine>
        <div class="productCardImg">
          <img :src="getImageUrl(product.image_src)" :alt="product.name" class="productCardImage"/>
        </div>
        <div class="productCardPrice">{{ product.price }}$</div>
        <div class="productCardName">{{ product.name }}</div>
      </div>

      <div class="productCardAction" style="background: transparent; border: solid 1px var(--accent-second-color); padding: 8px">
        <div class="productCardActionWrapper" style="justify-content: center">
          <div class="productCardActionsQtyCount">
            <div class="productCardActionsQtyCountWrapper">
              <div class="productCardActionsQtyCountTitle" :class="{'add-to-cart': 1}" style="text-align: center; color: var(--accent-second-color);">
                {{ 'Included in combo' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useCartStore} from '~/stores/shop/cart/index';
import {getImageUrl} from "~/utils/assets/img";

const cartStore = useCartStore();

const $router = useRouter();


export interface Product {
  idx: string;
  name: string;
  image_src: string;
  currency: string;
  price: number;
}

defineComponent({
  name: 'CatComboPrdCardItem',
})

// @ts-ignore
const props = defineProps<{
  product: Product;
}>();


const getProductQty = (productId: string) => cartStore.getProductQty(productId);
const handleIncrease = (product: any) => {
  setTimeout(() => {
    const existingQty = getProductQty(product.idx);
    if (existingQty === 0) {
      cartStore.addItem(product);
    } else {
      cartStore.increaseQty(product.idx)
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