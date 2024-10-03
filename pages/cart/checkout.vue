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
            Checkout - {{ cartQtyItem }} Qty.
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

    <div class="CartCheckoutSelectPay" style="margin-bottom: 18px">
      <label for="InputPromocode" style="margin-bottom: 8px; display: block;">Payment method</label>
      <div class="CartCheckoutSelectPayInput">
        <SelectBtnCityList style="background: #fff; border-radius: 8px; padding: 0;"
                           selectDefTitle="Select Payment Method"
                           :cities="InputSelPayment.list" v-model:citySelected="InputSelPayment.selected">
          <template #Icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 19H6C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V8C3 7.20435 3.31607 6.44129 3.87868 5.87868C4.44129 5.31607 5.20435 5 6 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V12.5M3 10H21M16 19H22M22 19L19 16M22 19L19 22M7.005 15H7.01M11 15H13"
                  stroke="#FF1919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </SelectBtnCityList>
      </div>
      <label for="InputPromocode" style="margin-bottom: 8px; display: block; color: var(--accent-second-color);"
             v-if="InputSelPayment.selected == undefined || InputSelPayment.selected == null">select method</label>
    </div>

    <div class="CartCheckoutAddress" style="margin-bottom: 18px">
      <label for="InputAddress" style="margin-bottom: 8px; display: block;">Delivery Address</label>
      <input placeholder="Enter promo code" style="
    padding: 14px 14px;
    background: #fff;
    border-radius: 6px;
    width: 100%;
    border: solid 1px #EFEFF4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
" v-model="InputAddress.value">
    </div>

    <div class="CartCheckoutPromocode" style="margin-bottom: 18px">
      <label for="InputPromocode" style="margin-bottom: 8px; display: block;">Promo code</label>
      <input placeholder="Enter promo code" style="
    padding: 14px 14px;
    background: #fff;
    border-radius: 6px;
    width: 100%;
    border: solid 1px #EFEFF4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
" disabled>
    </div>

    <div class="CartCheckoutConfirm"
         style="margin-bottom: 24px">
      <input name="InputConfirm" type="checkbox" v-model="InputConfirmTerm.checked">
      <label for="InputConfirm">I have read and accept the terms and conditions</label>

      <label for="InputConfirm" style="margin-bottom: 8px; display: block; color: var(--accent-second-color);"
             v-if="InputConfirmTerm.checked == undefined || InputConfirmTerm.checked == null">*** accept terms and
        conditions</label>
    </div>

    <!--    <div class="transferBlockWrapper"-->
    <!--         v-if="InputConfirmTerm.checked-->
    <!--         && InputSelPayment.selected !== undefined-->
    <!--         && InputSelPayment.selected !== null-->
    <!--          && InputSelPayment.selected.id === 'transfer'"-->
    <!--         style="margin-bottom: 24px"-->
    <!--    >-->
    <!--      <BlockBTransfer v-if="InputSelPayment.selected" :chckAmount="cartPrice"-->
    <!--                      v-model:transferInfo="InputSelPayment.transferInfo"/>-->
    <!--    </div>-->

    <!--    {{ InputSelPayment }}-->

    <!--  Checkout  -->
    <div class="CartCheckoutFooter">
      <div class="CartCheckoutFooterBtn" v-if="checkoutBtn.show" @click="checkoutCartData" v-haptic-engine
           style="">
        Order
      </div>
    </div>

  </div>
</template>

<script setup>
import {useCartStore} from '~/stores/shop/cart/index';
import {MainButton, useWebAppMainButton, useWebAppPopup, useWebApp} from "vue-tg";
//import {getImageUrl} from "~/utils/assets/img";
import SelectBtnCityList from "~/components/app/Main/Form/SelectBtnCityList.vue";
import BlockBTransfer from "~/components/app/Main/Orders/Block/BlockBTransfer.vue";
import {useCartCheckoutStore} from "~/stores/shop/cart/checkout/index";

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
//
const cartCheckoutStore = useCartCheckoutStore();

const checkoutBtn = reactive({
  show: computed(() => {
    return InputConfirmTerm.checked
        && InputSelPayment.selected !== undefined
        && InputSelPayment.selected !== null
  }),
})

const InputSelPayment = reactive({
  list: [
    {id: 'transfer', name: 'Bank Transfer'},
    {id: 'crypto', name: 'Pay Crypto'},
    {id: 'csh_del', name: 'Cash on Delivery'},
    // {id: 'wallet_app', name: '@Wallet (mini app)'},
    // {id: 'ton_wallet', name: 'Ton Wallet'}
  ],
  selected: null,
  transferInfo: null
});

const InputAddress = reactive({value: null});
const InputConfirmTerm = reactive({
  checked: false
})

appMainButton.onMainButtonClicked(() => checkoutCart())

const setShowTgBtnCheckout = (status) => {
  // if (status) {
  //   appMainButton.setMainButtonParams({
  //     text: "Checkout",
  //     color: "#C42323",
  //     is_active: true
  //   });
  //   appMainButton.showMainButton();
  // } else {
  //   appMainButton.hideMainButton();
  // }
}

const checkoutCartData = async () => {

  console.log(InputSelPayment.selected);
  //

  const deliveryAddress = toRaw(InputAddress.value);
  if (deliveryAddress == null || deliveryAddress.length < 3) {
    const msg_warn = "Please enter delivery address!";
    //
    if (!appWeb.isPlatformUnknown) {
      await appPopup.showAlert(msg_warn);
      return;
    } else {
      await alert(msg_warn);
      return;
    }
  }

  const paymentMethod = toRaw(InputSelPayment.transferInfo);
  //
  const {success, payment_link} = await cartCheckoutStore.fetchOrderCheckout({
    data: {
      ptype: InputSelPayment.selected.id,
      //
      items: cartItems.value,
      total_price: cartPrice.value,
      // pm: paymentMethod.idx,
      address: InputAddress.value,
    }
  });

  console.log(paymentMethod, "payment_link", payment_link);

  // console.log("result", result);

  const success_msg = "Order created. Waiting confirmation for payment.";
  const redirect_payment_page_msg = "Order created. Redirect to payment page.";
  const not_created_msg = "Order not created. Retry later.";

  //
  if (success) {

    if (InputSelPayment.selected.id === "crypto") {
      window.open(payment_link, '_blank').focus();

      if (!appWeb.isPlatformUnknown) {
        await appPopup.showAlert(redirect_payment_page_msg)
      } else {
        alert(redirect_payment_page_msg)
      }
      //
      clearCart();
      return;
    }

    // Clear cart
    clearCart();

    if (!appWeb.isPlatformUnknown) {
      await appPopup.showAlert(success_msg)
    } else {
      alert(success_msg);
    }

    //
    await $router.push({name: 'index'});

    // await $router.push({name: 'checkout-order', params: {id: order.id}})
  } else {
    if (!appWeb.isPlatformUnknown) {
      await appPopup.showAlert(not_created_msg);
    } else {
      alert(not_created_msg);
    }
  }
  // }
}


watchEffect(() => {
  if (cartQtyItem.value === 0) {
    $router.push({name: 'index'});
    appPopup.showAlert("Cart is empty.")
  } else {
    setShowTgBtnCheckout(true)
  }
});

onMounted(() => {
  if (cartQtyItem.value === 0) {
    $router.push({name: 'index'});
    appPopup.showAlert("Cart is empty.")
  } else {
    // setShowTgBtnCheckout(true)
  }
})

onBeforeRouteLeave(() => {
  // setShowTgBtnCheckout(false)
})

const clearCart = () => {
  cartStore.clearCart();
  // setShowTgBtnCheckout(false);
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