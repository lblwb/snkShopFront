<template>
  <div class="deliveryGua">
    <button class="deliveryGuaBtn" @click="$router.push({ name: 'static-faq-delivery' })" v-haptic-engine>
      <div class="deliveryGuaBtnWrapper">
        <div class="deliveryGuaBtnRow">
          <div class="deliveryGuaBtnRowWrapper">
            <div class="icon">
              <img src="~/assets/images/home/delivery.png" alt="Delivery Guarantee" class="deliveryGuaranteeImage"/>
            </div>
            <div class="text">Delivery Guarantee</div>
          </div>

        </div>
        <div class="deliveryGuaBtnArrow">
          <svg xmlns="http://www.w3.org/2000/svg" class="arrowIcon" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
defineComponent({
  name: 'DeliveryGuaBtn',
});

const $router = useRouter();
</script>

<style scoped>
.deliveryGua {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 18px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.deliveryGua:hover,
.deliveryGua:focus{
  opacity: 0.7;
}


.deliveryGuaBtn {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: none;
  background: none;
}

.deliveryGuaBtnWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.deliveryGuaBtnRowWrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.deliveryGuaBtnRow {
  display: flex;
  width: 100%;
}

.deliveryGuaranteeImage {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.text {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
}

.arrowIcon {
  width: 24px;
  height: 24px;
  color: #000;
}
</style>
