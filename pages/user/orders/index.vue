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
        <div class="CartCheckoutListItem" v-for="cartItem in cartOrdersItems" style=""
             @click="$router.push({name: 'user-orders-detail-slug', params: {slug: cartItem.idx}})">
          <!--          {{cartItem}}-->
          <div class="CartCheckoutListItemHeader"
               style="display: flex; justify-content: space-between; align-items: center;">
            <div class="listItemHeaderWrapper" style="display: flex; align-items: center; gap: 16px;">
              <div class="listItemHeaderInfo">
                <div class="listItemHeaderTitle" style="font-size: 14px;">
                  {{ cartItem.onc }}
                </div>
              </div>
            </div>
            <div class="listItemHeaderIcon" style="font-size: 14px; font-weight: 500; color: var(--text-second-color);">
              {{ getDateOrder(cartItem) }}
            </div>
          </div>
          <div class="listItemStatus" style="padding: 4px 0;">
            {{ getStatusOrder(cartItem) }}
          </div>
          <div class="listItemFooter" style="padding: 2px 0">
            <div class="listItemFooterWrap"
                 style="display: flex; align-items: center; gap: 16px; justify-content: space-between">
              <div class="listItemFooterInfo" style="">
                <div class="listItemFooterInfoProducts">
                  <div class="listItemFooterInfoProductsWrapper" style="display: flex;gap: 4px;">
                    <div class="listItemFooterInfoProductsItem" v-if="cartItem.items" v-for="item in cartItem.items">
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
                  </div>
                </div>
              </div>
              <div class="listItemFooterInfo" style="">
                <div class="listItemFooterInfoQty">
                  {{ cartItem.total_amount !== null ? cartItem.total_amount + '€' : '' }}
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
// import {useCartStore} from '~/stores/shop/cart/index';
import {MainButton, useWebAppMainButton, useWebAppPopup, useWebApp} from "vue-tg";
import {useUserOrdersStore} from "~/stores/user/orders/userOrders";
import {getImageUrl} from "~/utils/assets/img";

definePageMeta({
  layout: 'twa-default'
})

const $router = useRouter();
const $route = useRoute();
const {$uTimer} = useNuxtApp();

const userOrdersStore = useUserOrdersStore();
const cartOrdersItems = computed(() => userOrdersStore.getUserOrders)

useAsyncData(() => {
  userOrdersStore.fetchOrdersByUserAcc();
});

onMounted(async () => {
  $uTimer.startTimer('orderListRefresh', userOrdersStore.fetchOrdersByUserAcc, 25000);
  $uTimer.watchRouteForTimer('orderListRefresh');
});

const getStatusOrder = (order) => {
  if (!order) {
  }
  if (order.status === 'pending') {
    return 'Pending'
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
  /*box-shadow: rgb(240 240 240) 3px -12px 13px 8px;*/
  border-radius: 6px;
  padding: 4px 6px;
  border: solid 2px rgba(248, 248, 248, 0.8);
  /*overflow: hidden;*/
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