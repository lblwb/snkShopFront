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
            Order - {{ data.orderData.onc }}
          </div>
        </div>
      </div>

      <div class="CartCheckoutHeadingAmount">
        <!--        Total amount: <span>{{ cartPrice }} €</span>-->
      </div>

    </div>

    <div class="CartCheckoutBody">

      <div class="CartCheckoutBodyDate" style="margin-bottom: 20px; padding: 14px">
        {{ getDateOrder(data.orderData) }}
      </div>

      <div class="CartCheckoutBodyStatus" style="margin-bottom: 20px">
        Order Status: {{ getStatusOrder(data.orderData) }}
      </div>

      <div class="CartCheckoutBodyAddress" style="margin-bottom: 20px">
        Delivery address: {{ data.orderData.delivery_address }}
      </div>

      <div class="CartCheckoutBodyAmount" style="margin-bottom: 48px">
        Total amount: <span class="CartCheckoutBodyAmountCount">{{ data.orderData.total_amount }} €</span>
      </div>

      <div class="productListInfo" style="margin-bottom: 36px; border-bottom: 1px solid var(--brd-second-color);">
        <div class="productListInfoWrapper" style="display: flex; flex-flow: row wrap; gap: 6px;">
          <div class="listItemFooterInfoProductsItem" v-if="data.orderData.items" v-for="item in data.orderData.items">
            <div class="productItemImg"
                 style="border-radius: 20px; overflow: hidden; position: relative; width: 48px; height: 48px; border: solid 2px var(--brd-second-color); display: flex; align-items: center; justify-content: center; z-index: 2;">
              <img :src="getImageUrl(item.image_src)" style="width: 100%;">
              <div class="productItemQty" style="position: absolute; right: -1px; top: -1px;">
                <div class="productItemQtyBlock"
                     style="background: #fff; padding: 2px 6px; font-size: 11px; z-index: 4; border-radius: 16px; border: solid 1px var(--accent-block-color)">
                  {{ item.quantity }}
                </div>
              </div>
            </div>
          </div>
          <div class="listItemFooterInfoProductsList">
            <div class="listItemFooterInfoProductsItem" v-if="data.orderData.items"
                 v-for="(item, key) in data.orderData.items" @click="$router.push({name: 'catalog-product-slug', params: {slug: item.product.idx}})">
              <div class="productsItemWrapper"
                   style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 16px 0;">
                <div class="productsItemTitle" style="max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; font-weight: 700; color: var(--text-accent-color);">
                  # {{ key + 1 }}. {{ item.product.name }}
                </div>
                <div class="productsItemPrice">
                  (Q: {{ item.quantity }}) {{ item.product.price }} {{ item.product.currency }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="CartCheckoutBodyPay" style="margin-bottom: 20px"
           v-if="data.orderData.status === 'payment_processing'">
        <a class="CartCheckoutBodyPayLink"
           :href="data.orderData.invoice.payment_link"
           target="_blank"
           style="padding: 14px 14px; width: 100%; border: solid 1px var(--accent-comp-high-color); border-radius: 6px; color: var(--accent-comp-high-color); font-size: 14px; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
          <div class="CartCheckoutBodyPayLinkWrapper"
               style="display: flex; justify-content: space-between; align-items: center; width: 100%">
            <div class="payLinkTitle">
              Pay for the order
            </div>
            <div class="payLinkIcon" style="display: flex;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.3939 5.39391C8.72864 5.05918 9.27135 5.05918 9.60609 5.39391L15.6061 11.3939C15.9408 11.7286 15.9408 12.2714 15.6061 12.6061L9.60609 18.6061C9.27135 18.9408 8.72864 18.9408 8.3939 18.6061C8.05917 18.2714 8.05917 17.7286 8.3939 17.3939L13.7878 12L8.3939 6.60609C8.05917 6.27136 8.05917 5.72865 8.3939 5.39391Z"
                      fill="#4861F3"/>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div class="CartCheckoutBodyPay" style="margin-bottom: 20px"
           v-if="data.orderData.status === 'payment_b_pnd_receipt'">
        <button
            style="padding: 8px 14px; background:transparent; border: solid 1px var(--accent-comp-high-color); border-radius: 6px; color: var(--accent-comp-high-color); font-size: 14px; font-weight: 600; width: 100%;">

          <div class="CartCheckoutBodyPayLinkWrapper"
               style="display: flex; justify-content: space-between; align-items: center; width: 100%">
            <div class="payLinkTitle">
              Request bank acc. for payment
            </div>
            <div class="payLinkTitle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17" stroke="#4861F3"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
      </div>

      <div class="CartCheckoutBodyPay" style="margin-bottom: 20px" v-if="data.orderData.pay_acc">
        <!--           v-if="data.orderData.status === 'payment_b_pnd_receipt'">-->
        <BlockBTransferOrder :recInfo="data.orderData.pay_acc" :orderData="data.orderData"/>
      </div>

      <!--      {{data.orderData.pay_acc}}-->

      <!--      payment_processing-->


      <!--      {{ data.orderData }}-->
    </div>
  </div>
</template>

<script setup>
// import {useCartStore} from '~/stores/shop/cart/index';
import {MainButton, useWebAppMainButton, useWebAppPopup, useWebApp} from "vue-tg";
import {useUserOrdersStore} from "~/stores/user/orders/userOrders";
import {getImageUrl} from "~/utils/assets/img";
import BlockBTransferOrder from "~/components/app/Main/Orders/Block/BlockBTransferOrder.vue";

definePageMeta({
  layout: 'twa-default'
})

const $router = useRouter();
const $route = useRoute();

let data = reactive({
  orderData: {}
})

// const userOrdersStore = useUserOrdersStore();
// const cartOrdersItems = computed(() => userOrdersStore.getUserOrders)

useAsyncData(async () => {
  const {$axios} = useNuxtApp();
  const router_order_slug = $route.params.slug;
  const result = await $axios.get(`/api/v1/order/by_user/detail/${router_order_slug}`, {});
  // userOrdersStore.fetchOrdersByUserAcc();
  data.orderData = result.data.order;
  console.log(result);
})

const getStatusOrder = (order) => {
  if (!order) {
  }
  if (order.status === 'pending') {
    return 'Pending'
  }
  if (order.status === 'cancelled') {
    return 'Cancelled! Retry later.'
  }
  if (order.status === 'payment_b_pnd_receipt') {
    return 'Wait / A bank account to be transferred!'
  }
  if (order.status === 'payment_b_pnd_accepted') {
    return 'Pending / The transfer is accepted, verification'
  }
  if (order.status === 'payment_b_pnd_accepted') {
    return 'Pending / Bank transfer trans. accepted!'
  }
  if (order.status === 'payment_processing') {
    return 'Payment processing'
  }
}

const formatDate = (orderCreatedAt) => {
  const now = new Date();
  const date = new Date(orderCreatedAt);
  const diffInSeconds = Math.floor((now - date) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;

  let timeAgo;

  if (diffInSeconds < secondsInMinute) {
    timeAgo = `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    timeAgo = `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    timeAgo = `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (diffInSeconds < secondsInWeek) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    timeAgo = `${days} day${days === 1 ? '' : 's'} ago`;
  } else {
    // If more than a week has passed, format the date as "dd.mm.yy hh:mm"
    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(',', '');
  }

  return {timeAgo};
}

const getDateOrder = (order) => {
  try {
    //parse: 2024-10-03T01:22:03.525255Z
    let date = new Date(order.created_at);
    let date_result = formatDate(date);
    return date_result.timeAgo;
  } catch (e) {
    return "-";
  }

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
  /*position: absolute;*/
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 480px;
  margin: 0 auto;
  min-height: 64vh;
  box-shadow: rgb(0 0 0 / 5%) 0px -9px 12px 10px;
  font-size: 18px;
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

.CartCheckoutBodyDate, .CartCheckoutBodyAmountCount {
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
  display: inline-flex;
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