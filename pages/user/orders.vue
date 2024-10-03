<template>
  <div class="CartCheckout">
    <!--    -->
    <!--    {{ InputSelPayment.selected }}-->
    <!--    -->

    <div class="CartCheckoutHeading" style="margin-bottom: 24px">
      <div class="CartCheckoutHeadingInfo">
        <div class="CartCheckoutHeadingInfoWrapper"
             style="display: flex; justify-content: space-between; align-items: center;">
          <div class="CartCheckoutHeadingTitle">
            Orders
          </div>
        </div>
      </div>

      <div class="CartCheckoutHeadingAmount">
        <!--        Total amount: <span>{{ cartPrice }} €</span>-->
      </div>

    </div>

    <div class="CartCheckoutBody">
      <div class="CartCheckoutList"
           style="display: flex;flex-flow: column;gap: 24px;max-height: 32vh;overflow: hidden auto;height: 100%;min-height: 50vh;overflow-x: hidden;overflow-x: scroll;">
        <div class="CartCheckoutListItem" v-for="cartItem in cartOrdersItems" style="">
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
              </div>


            </div>
            <div class="listItemHeaderIcon">
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


    </div>
  </div>
</template>

<script setup>
import {useCartStore} from '~/stores/shop/cart/index';
import {MainButton, useWebAppMainButton, useWebAppPopup, useWebApp} from "vue-tg";
//import {getImageUrl} from "~/utils/assets/img";
import SelectBtnCityList from "~/components/app/Main/Form/SelectBtnCityList.vue";
import {useCartCheckoutStore} from "~/stores/shop/cart/checkout/index";
import {getImageUrl} from "~/utils/assets/img";


definePageMeta({
  layout: 'twa-default'
})


const appWeb = useWebApp();
const appMainButton = useWebAppMainButton();
const appPopup = useWebAppPopup();

const cartOrdersItems = reactive([
  {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },
  {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },
  {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },
  {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },

  {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },
      {
    name: 'Order #43443',
    image_src: getImageUrl('test.png'),
    price: 100
  },
])


const $router = useRouter();


const cartStore = useCartStore();
const cartItems = computed(() => cartStore.getItems)
const cartQtyItem = computed(() => cartStore.getTotalItems)
const cartPrice = computed(() => cartStore.getTotalPrice)
//
const cartCheckoutStore = useCartCheckoutStore();


// watchEffect(() => {
//   if (cartQtyItem.value === 0) {
//     $router.push({name: 'index'});
//     appPopup.showAlert("Cart is empty.")
//   } else {
//     setShowTgBtnCheckout(true)
//   }
// });

// onMounted(() => {
//   if (cartQtyItem.value === 0) {
//     $router.push({name: 'index'});
//     appPopup.showAlert("Cart is empty.")
//   } else {
//     setShowTgBtnCheckout(true)
//   }
// })

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
  min-height: 64vh;
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
  align-items: center;
  border: solid 1px #eee;
  border-radius: 16px;
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

.CartCheckoutListItem {
  box-shadow: rgb(0 0 0 / 5%) 2px 5px 8px 0px;
  border-radius: 6px;
  padding: 4px 0px;
}

.CartCheckoutConfirm {
  margin-bottom: 18px;
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  justify-content: space-between;
}

.CartCheckoutConfirm label {
  font-size: 14px;
  font-weight: 500;
}

.CartCheckoutConfirm input {
  width: 24px;
  height: 24px;
  border: solid 2px var(--text-second-color);
  border-radius: 10px;
}

.CartCheckoutConfirm input:checked {
  background: var(--stories-bd-bg-unic-grd);
}


.CartCheckoutFooterBtn {
  padding: 18px 15px;
  background: var(--accent-second-btn);
  color: #fff;
  text-align: center;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.CartCheckoutFooterBtn:hover,
.CartCheckoutFooterBtn:focus {
  background: var(--accent-comp-high-color);
}


</style>