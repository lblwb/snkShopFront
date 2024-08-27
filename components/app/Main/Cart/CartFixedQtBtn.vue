<template>
  <div class="cartFixedBar" v-if="cartStore.getTotalItems > 0" @click="$router.push({name: 'cart-checkout'})" v-haptic-engine>
    <button class="cartFixedBarBtn" style="">
      <div class="cartFixedBarBtnWrapper" style="display: flex; align-items: center; gap: 10px">
        <div class="cartFixedBarBtnTitle">
          Basket
        </div>
        <div class="cartFixedBarBtnBadge" style="">
          {{ cartStore.getTotalItems + ' qty' }}
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import {useCartStore} from '~/stores/shop/cart/index';

const cartStore = useCartStore();

const $router = useRouter();

defineComponent({
  name: 'CartFixedQtBtn',
})
</script>

<style scoped>
.cartFixedBar {
  position: fixed;
  bottom: 8vh;
  left: 8px;
  right: 8px;
  margin: 0 auto;
  max-width: 480px;
}

.cartFixedBarBtn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  background: linear-gradient(90deg, #DA417C 19%, #F34C53 100%);
  box-shadow: 10px 10px 24px rgba(72, 103, 245, 0.14), -10px -10px 24px rgba(72, 103, 245, 0.14);
  border-radius: 24px;
  border: none;
}

.cartFixedBarBtnTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
}

.cartFixedBarBtnBadge {
  display: flex;
  background: #000;
  padding: 3px 8px;
  border-radius: 24px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;

}
</style>