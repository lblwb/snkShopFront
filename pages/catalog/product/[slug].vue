<template>
  <div class="ProductFull">
    <!--        {{ currentProduct }}-->
    <div class="ProductFullBodyWrapper" style="">
      <div class="ProductFullBodyHeadingActions"
           style="position: fixed;right: 0px;left: 0px;bottom: 56px;z-index: 40;padding: 10px;background: rgb(255, 255, 255);">
        <div class="ProductFullBodyHeadingActionsWrapper"
             style="display: flex; align-items: center; justify-content: space-between;">
          <div class="ProductFullBodyHeadingActionsLastBtn" @click="$router.back()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M5 12L9 16M5 12L9 8" stroke="black" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="ProductFullBodyHeadingActionsLastBtn" @click="$router.push({
          name: 'cart-checkout'
          })" style="padding: 10px; background: var(--accent-block-color); border-radius: 16px;">
            Cart
          </div>
          <!--          <div class="ProductFullBodyHeadingActionsLastFav" @click="addFavorite(currentProduct)">-->
          <!--            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path-->
          <!--                  d="M18.5 10.572L11 18L3.5 10.572C3.00531 10.0906 2.61565 9.51201 2.35555 8.87263C2.09546 8.23325 1.97057 7.54694 1.98874 6.85693C2.00692 6.16691 2.16777 5.48813 2.46116 4.86333C2.75456 4.23853 3.17414 3.68125 3.69349 3.22657C4.21284 2.7719 4.82071 2.42968 5.47881 2.22147C6.13692 2.01327 6.83101 1.94358 7.51737 2.0168C8.20373 2.09001 8.8675 2.30455 9.46688 2.6469C10.0663 2.98925 10.5883 3.45199 11 4.00599C11.4135 3.45602 11.9361 2.99731 12.5351 2.6586C13.1341 2.31988 13.7965 2.10844 14.4809 2.03751C15.1654 1.96658 15.8571 2.03769 16.5128 2.24639C17.1685 2.45508 17.774 2.79687 18.2916 3.25036C18.8091 3.70385 19.2274 4.25928 19.5204 4.88189C19.8134 5.50449 19.9747 6.18088 19.9943 6.8687C20.0139 7.55653 19.8913 8.24099 19.6341 8.87924C19.377 9.5175 18.9909 10.0958 18.5 10.578"-->
          <!--                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--            </svg>-->
          <!--          </div>-->

        </div>
      </div>
      <div class="ProductFullBodyHeading">
        <!-- Product Image -->
        <div class="bodyHeadingSliders">
          <ProductFullSliderImages :productsImages="currentProduct.images"/>
        </div>
        <!--  Product Info  -->
        <div class="bodyHeadingProductInfo">
          <div class="bodyHeadingProductInfoBadgeImg">
            <div class="productInfoBadgeImgBlock"
                 style="">
              <div class="productInfoBadgeImgBlockWrapper">
                <div class="productInfoBadgeImgIcon">
                  <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.963 9.25a2.17 2.17 0 0 0 1.594-.656c.438-.438.657-.97.656-1.594a2.17 2.17 0 0 0-.656-1.594 2.168 2.168 0 0 0-1.594-.656 2.17 2.17 0 0 0-1.594.657A2.168 2.168 0 0 0 4.713 7c0 .625.22 1.156.657 1.594.438.438.969.656 1.593.656Zm-4 1.75a.963.963 0 0 1-.706-.294.961.961 0 0 1-.294-.706V4c0-.275.098-.51.294-.707A.961.961 0 0 1 2.963 3h1.575l.625-.675a.87.87 0 0 1 .332-.244A1.03 1.03 0 0 1 5.9 2h2.125c.142 0 .278.027.407.082.13.054.24.135.33.243L9.389 3h1.575c.275 0 .51.098.707.294a.961.961 0 0 1 .293.706v6c0 .275-.098.51-.294.707a.961.961 0 0 1-.706.293h-8Z"
                        fill="currentColor"></path>
                  </svg>
                </div>
                <div class="productInfoBadgeImgCount">
                  {{ currentProduct.images !== undefined ? currentProduct.images.length : 1 }} фото
                </div>
              </div>
            </div>
          </div>
          <div class="bodyHeadingProductInfoTitle">
            {{ currentProduct.title }}
          </div>

          <div class="bodyHeadingProductInfoTitle" style="font-size: 16px">
            <span style="font-weight: 500;">Категории:</span>
            {{ currentProduct.categories !== undefined ? currentProduct.categories.join(" ,") : "" }}
          </div>

        </div>
        <!-- Product Order  -->
        <div class="bodyHeadingProductOrder">
          <div class="bodyHeadingProductOrderCard" style="margin-bottom: 96px">
            <div class="productOrderCardWrapper">
              <div class="productOrderCardPrice" style="">
                <div class="productOrderCardPriceWrapper">
                  <div class="productOrderCardPriceTitle">
                    <!--                        10&nbsp;862&nbsp;<span>₽</span> <s>11&nbsp;004 <span>₽</span></s>-->
                    {{
                      currentProduct && currentProduct.price && currentProduct.price !== undefined ? currentProduct.price : 0
                    }}
                    <span style="font-family: 'Roboto',sans-serif">$</span>
                  </div>
                </div>
              </div>
            </div>

            <!--                {{ currentProduct }}-->

            <div class="bodyHeadingProductInfoDesc" style="margin-bottom: 32px">
              <div class="bodyHeadingProductInfoDescHeadingTitle"
                   style="font-weight: 600;font-size: 20px;margin-bottom: 16px;">
                Описание:
              </div>

              <div class="bodyHeadingProductInfoDescText"
                   v-if="currentProduct && currentProduct.description !== ''">
                <div class="bodyHeadingProductInfoDescTextContent" v-text="currentProduct.description"/>
              </div>
              <div class="bodyHeadingProductInfoDescText" v-else>
                Отсутствует!
              </div>


            </div>

            <div class="bodyHeadingProductInfoDesc">
              <div class="bodyHeadingProductInfoDescHeadingTitle"
                   style="font-weight: 600; font-size: 18px; margin-bottom: 10px">
                Характеристики:
              </div>

              <div class="bodyHeadingProductInfoDescText"
                   v-if="currentProduct && currentProduct.description !== ''">
                <!--                    <div class="bodyHeadingProductInfoDescTextContent" v-text="currentProduct.description"/>-->


              </div>
              <div class="bodyHeadingProductInfoDescText" v-else>
                Отсутствуют!
              </div>
              <div class="product__features"><!---->
                <!--                      <div class="margin-32-top"><h5>характеристики</h5>-->
                <div class="product__feature" v-for="attr in currentProduct.attributes" :key="attr.code">
                  <div class="c-dark margin-16-right">{{ attr.name }}</div>
                  <div class="fw-bold">{{ attr.value }}</div>
                </div>
              </div>
              <!---->
            </div>


          </div>

        </div>
      </div>
    </div>

    <div class="ProductFullFixedOrderBtn" style="align-items: center">
      <div class="productCardAdd" v-if="getProductQty(currentProduct.id) < 1">
        <button class="productCardAddBtn"
                style="background: var(--accent-second-btn); border: none; width: 100%; padding: 14px 16px; border-radius: 20px"
                @click="handleIncrease(currentProduct)"
                v-haptic-engine>
          <div class="productCardAddBtnWrapper">
            <div class="productCardAddBtnTitle" style="font-weight: 600; font-size: 14px; color: #fff;">
              Add to cart
            </div>
          </div>
        </button>
      </div>

      <div class="productCardAction" v-else>
        <div class="productCardActionWrapper">
          <div class="productCardActionsQtyAddMinus">
            <div class="qtyAddMinusBtn">
              <button @click="decreaseQuantity(currentProduct.id)"
                      class="productCardButton"
                      :class="{'__Disabled': getProductQty(currentProduct.id) < 1}"
                      :disabled="getProductQty(currentProduct.id) === 0" v-haptic-engine>
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
              <div class="productCardActionsQtyCountTitle"
                   :class="{'add-to-cart': getProductQty(currentProduct.id) === 0}">
                {{ getProductQty(currentProduct.id) === 0 ? 'Add to cart' : getProductQty(currentProduct.id) + ' Qty' }}
                ~ {{ getProductQty(currentProduct.id) * currentProduct.price + '$' }}
              </div>
            </div>
          </div>

          <div class="productCardActionsQtyAdd">
            <div class="qtyAddPlusBtn">
              <button @click="handleIncrease(currentProduct)" class="productCardButton" v-haptic-engine>
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
<!--  </TwaMainLt>-->
<!--</template>-->

<script setup>
import ProductFullSliderImages from "~/components/app/Main/Catalog/Product/ProductFullSliderImages.vue";

definePageMeta({
  layout: "twa-default",
});

import {getImageUrl} from "~/utils/assets/img";
import {useCartStore} from "~/stores/shop/cart/index";

const $router = useRouter();
const $route = useRoute();
const cartStore = useCartStore();


// Определение списка продуктов
const currentProduct = ref({
  id: 15,
  name: "New Balance NB 550 D",
  image_src: getImageUrl("products/test.png"),
  images: [{
    original: getImageUrl("products/test.png")
  }, {
    original: getImageUrl("products/test.png")
  }],
  categories: [],
  attributes: [
    {name: "Color", value: "Black"}
  ],
  price: 120,
  currency: "$",
});


const getProductQty = (productId) => cartStore.getProductQty(productId);
const handleIncrease = (product) => {
  const existingQty = getProductQty(product.id);
  if (existingQty === 0) {
    cartStore.addItem(product);
  } else {
    cartStore.increaseQty(product.id)
  }
};
const decreaseQuantity = (productId) => cartStore.decreaseQty(productId);
</script>

<style scoped>
img {
  object-fit: cover;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

::-webkit-scrollbar {
  display: none;
  scrollbar-gutter: stable both-edges;
}

.margin-32-top {
  margin-top: 18px;
}

h5 {
  font-size: 16px;
}

.product__feature {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.product__feature > div {
  flex: 1;
  width: 50%;
}

.product__features {

}


.ProductFull {
  position: relative;
}

.ProductFullBodyWrapper {

}

.ProductFullBodyHeading {

}

.bodyHeadingSliders {

}

/*Product Info*/
.bodyHeadingProductInfo {
  margin-bottom: 32px
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg {
  display: flex
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg .productInfoBadgeImgBlock {
  margin-bottom: 20px;
  background: var(--accent-block-color);
  color: var(--bg-primary-color);
  padding: 4px 6px;
  border-radius: 6px;
  box-shadow: rgba(220, 220, 220, 0.5) -8px 4px 16px 8px;
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg .productInfoBadgeImgBlock
.productInfoBadgeImgBlockWrapper {
  display: flex;
  align-items: center;
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg .productInfoBadgeImgBlock
.productInfoBadgeImgIcon {
  margin-right: 6px;
  display: flex;
  align-items: center
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg .productInfoBadgeImgBlock
.productInfoBadgeImgIcon svg {
}

.bodyHeadingProductInfo .bodyHeadingProductInfoBadgeImg .productInfoBadgeImgBlock
.productInfoBadgeImgCount {
  font-weight: 600;
}

.bodyHeadingProductInfo .bodyHeadingProductInfoTitle {
  color: var(--bg-primary-color);
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 110%;
  max-width: 80%;
  margin-bottom: 18px;
}

.bodyHeadingProductInfoShop {
  background: var(--bg-primary-color);
  padding: 10px 16px;
  border-radius: 10px;
  color: var(--bg-second-color);
}

.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopBtn {
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
}

.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopBtn:hover,
.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopBtn:focus {
  opacity: 0.7;
}

.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopIcon {
  display: flex;
  align-items: center;
}


.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopIcon svg {
  max-width: 24px;
  max-height: 24px;
}

.bodyHeadingProductInfoShop .bodyHeadingProductInfoShopBtn .bodyHeadingProductInfoShopIcon {
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: var(--bg-second-color) !important;
}

.bodyHeadingProductInfoShopName {
  font-weight: 600;
  font-size: 16px;
}

/* Ordered */
.bodyHeadingProductOrder {
  margin-bottom: 128px;
}

.bodyHeadingProductOrder .bodyHeadingProductOrderCard {
  background: var(--bg-second-color);
  border-radius: 20px;
  padding: 16px;
  color: var(--bg-primary-color);
  position: relative;
  z-index: 1;
  box-shadow: rgba(220, 220, 220, 0.5) -8px 4px 16px 8px;
  min-height: 60vw;
}

.bodyHeadingProductOrder .bodyHeadingProductOrderCard .productOrderCardWrapper {

}

.bodyHeadingProductOrder .bodyHeadingProductOrderCard .productOrderCardPrice {
  border: solid 1px #eee;
  background: #eee;
  display: inline-flex;
  border-radius: 16px;
  margin-bottom: 24px;
}


.bodyHeadingProductOrder .bodyHeadingProductOrderCard .productOrderCardPrice .productOrderCardPriceWrapper {

}

.bodyHeadingProductOrder .bodyHeadingProductOrderCard .productOrderCardPrice .productOrderCardPriceTitle {
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: normal;
  transition: all .3s linear;
  color: var(--bg-primary-color);
}

.bodyHeadingProductOrder .bodyHeadingProductOrderCard .productOrderCardPrice .productOrderCardPriceTitle > s {
  color: var(--text-second-color);
  font-size: .8em;
  white-space: nowrap;
}

.ProductFullFixedOrderBtn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 8px 16px;
  box-shadow: 0 -0.33px 0 #00000040;
  z-index: 99;
  background: #fff;
}

/*.ProductFullFixedOrderBtn button {*/
/*  height: 45px;*/
/*  border-radius: 12px;*/
/*  background: var(--bg-primary-color);*/
/*  color: var(--bg-second-color);*/
/*  font-size: 17px;*/
/*  font-weight: 600;*/
/*  width: 100%;*/
/*  border: unset;*/
/*  outline: unset;*/
/*  focus: unset;*/
/*}*/


/**/


.productCardActions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
}

.productCardAction {
  background: #EFEFF4;
  padding: 12px 16px;
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