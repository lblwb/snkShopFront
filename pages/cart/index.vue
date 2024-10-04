<template>
  <div class="CartCheckout">

    <div class="CartCheckoutHeading">
      <div class="CartCheckoutHeadingInfo">
        <div class="CartCheckoutHeadingInfoWrapper"
             style="display: flex; justify-content: space-between; align-items: center;">
          <div class="CartCheckoutHeadingTitle">
            Basket - {{ cartQtyItem }} Qty.
          </div>
          <div class="CartCheckoutHeadingInfoAction">
            <button @click="clearCart" class="headingInfoActionClearBtn"
                    style="background: #fff; padding: 4px 8px; border-radius: 16px; border: none;">
              <span class="headerInfoActionClearBtnIcon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </span>
            </button>
          </div>

        </div>
      </div>

      <div class="CartCheckoutHeadingAmount">
        Total amount: <span>{{ cartPrice }} €</span>
      </div>

    </div>

    <div class="CartCheckoutBody">
      <div class="CartCheckoutList">
        <div class="CartCheckoutListItem" v-for="cartItem in cartItems" style="">
          <!--          {{cartItem}}-->
          <div class="CartCheckoutListItemHeader"
               style="display: flex; justify-content: space-between; align-items: center;">
            <div class="listItemHeaderWrapper" style="display: flex; align-items: center; gap: 16px;">
              <div class="listItemHeaderImg"
                   style="max-width: 56px; width: 100%; height: 100%; max-height: 56px; background: #fff; border-radius: 16px;">
                <img :src="getImageUrl(cartItem.image_src)" :alt="cartItem.name" style="width: 100%; height: auto"
                     v-if="cartItem.image_src">
              </div>
              <div class="listItemHeaderInfo">
                <div class="listItemHeaderTitle">
                  {{ cartItem.name }}
                </div>
                <div class="listItemHeaderQty" style="font-size: 12px; font-weight: 600; color: #aaa;">
                  {{ cartItem.qty }} Qty.
                </div>
              </div>


            </div>
            <div class="listItemHeaderIcon" @click="removeProductCart(cartItem)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="listItemFooter" style="padding: 2px 0">
            <div class="listItemFooterWrap"
                 style="display: flex; align-items: center; gap: 16px; justify-content: right">
              <div class="listItemFooterInfo" style="">
                <div class="listItemFooterInfoQty" style="

">
                  {{
                    cartItem.price !== null && cartItem.qty > 0 ? (cartItem.price * cartItem.qty) + ' ' + cartItem.currency : ''
                  }}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="CartCheckoutFooter">
        <div class="CartCheckoutFooterBtn" v-if="checkoutBtn.show" @click="$router.push({name: 'cart-checkout'})"
             v-haptic-engine
        >
          Checkout
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useCartStore} from '~/stores/shop/cart/index';
import {MainButton, useWebAppMainButton, useWebAppPopup, useWebApp} from "vue-tg";
import {getImageUrl} from "~/utils/assets/img";

definePageMeta({
  layout: 'twa-default'
})


const appWeb = useWebApp();
const appMainButton = useWebAppMainButton();
const appPopup = useWebAppPopup();


const $router = useRouter();

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.getItems)
const cartQtyItem = computed(() => cartStore.getTotalItems)
const cartPrice = computed(() => cartStore.getTotalPrice)

const checkoutBtn = reactive({
  // show: computed(() => appWeb.isPlatformUnknown)
  show: true
})

// appMainButton.onMainButtonClicked(() => checkoutCart())

const setShowTgBtnCheckout = (status) => {
  if (status) {
    appMainButton.setMainButtonParams({
      text: "Checkout",
      color: "#C42323",
      is_active: true
    });
    appMainButton.showMainButton();
  } else {
    appMainButton.hideMainButton();
  }
}


watchEffect(() => {
  if (cartQtyItem.value === 0) {
    $router.push({name: 'index'});
    appPopup.showAlert("Cart is empty.")
  } else {
    // setShowTgBtnCheckout(true)
  }
});

onMounted(() => {
  if (cartQtyItem.value === 0) {
    $router.push({name: 'index'});
    appPopup.showAlert("Cart is empty.")
  } else {
    //setShowTgBtnCheckout(true)
  }
})

onBeforeRouteLeave(() => {
  //setShowTgBtnCheckout(false)
})

const clearCart = () => {
  cartStore.clearCart();
  //setShowTgBtnCheckout(false);
  //
  $router.push({name: 'index'});
}
const removeProductCart = (product) => {
  cartStore.removeItem(product.idx)
}


const checkoutCart = () => {
  setTimeout(() => {
    appPopup.showAlert("Success completed");
  }, 1000);
  clearCart();
}

</script>

<style scoped>

.CartCheckoutHeadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 12px;
}

.CartCheckoutHeadingAmount {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
}

.CartCheckoutHeadingAmount span {
  font-weight: 600;
}

.CartCheckoutBody {
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 480px;
  margin: 0 auto;
  min-height: 50vh;
  max-height: 50vh;
  box-shadow: rgb(0 0 0 / 5%) 0px -9px 12px 10px;
}

.CartCheckoutFooter {

}

.listItemHeaderImg {
  max-width: 56px;
  width: 100%;
  height: 100%;
  max-height: 56px;
  background: rgb(255, 255, 255);
  min-height: 56px;
  display: flex;
  align-items: stretch;
  border: solid 1px #eee;
  border-radius: 16px;
  overflow: hidden;
}

.listItemHeaderImg img {
  object-fit: cover;
}

.listItemHeaderTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #272728;
}

.listItemFooterInfoQty {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #575758;
  background: var(--bg-second-color);
  padding: 2px 8px;
  border-radius: 16px;
}

.CartCheckoutList {
  display: flex;
  flex-flow: column;
  gap: 24px;
  max-height: 86vh;
  overflow: hidden auto;
  height: 100%;
  min-height: 50vh;
}

@media screen and (max-width: 380px) {
  .CartCheckoutList {
    display: flex;
    flex-flow: column;
    gap: 24px;
    max-height: 86vh;
    overflow: hidden auto;
    height: 100%;
    min-height: 36vh;
  }
}

.CartCheckoutListItem {
  box-shadow: rgb(0 0 0 / 5%) 2px 5px 8px 0px;
  border-radius: 6px;
  padding: 4px 0px;
}

/**/

.CartCheckoutFooterBtn {
  padding: 18px 15px;
  background: transparent;
  text-align: center;
  border-radius: 16px;
  /*border: none;*/
  cursor: pointer;
  border: solid 1px var(--accent-second-btn);
  color: var(--accent-second-btn);
  font-weight: 600;
}

.CartCheckoutFooterBtn:hover,
.CartCheckoutFooterBtn:focus {
  background: var(--accent-comp-high-color);
  color: #fff;
}
</style>