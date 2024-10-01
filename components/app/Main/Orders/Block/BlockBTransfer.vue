<template>
  <div class="BlockTransfer">
    <div class="BlockTransferHeading">
      <div class="BlockTransferHeadingTitle">
        Reception:
      </div>
    </div>
    <div class="BlockTransferData"
         v-if="recInfo !== null && recInfo.data_source !== undefined && recInfo.data_source !== null">
      <!--      {{ recInfo.data_source }}-->
      <div class="BlockTransferDataWrapper" v-if="recInfo.data_source">
        <span v-html="recInfo.data_source" style=" line-height: 1.5em;"></span>
      </div>
    </div>
    <div class="BlockTransferDesc">
      <div class="BlockTransferDescWrapper" style="">
        <div class="BlockTransferDescIcon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 9H12.01M11 12H12V16H13M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                stroke="var(--bg-connect-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="BlockTransferDescText" style="">
          Make the transfer using the above details, then click "<span class="__Hight">Order</span>". After that, wait
          for the order status to be changed in the personal account section!
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useCartBAccStore} from "~/stores/shop/cart/checkout/bacc";

defineComponent({
  name: 'BlockBTransfer',
})


const cartBAccStore = useCartBAccStore();
const recInfo = computed(() => cartBAccStore.getRec);

defineComponent({
  name: 'BlockTransfer'
})

const emit = defineEmits(['transferInfo']);

const props_data = defineProps({
  chckAmount: {
    type: Number,
    default: 'BlockBTransfer'
  }
})

useAsyncData(async () => {
  await cartBAccStore.fetchBankRec(props_data.chckAmount);
  //
  await emit('update:transferInfo', cartBAccStore.getRec);
})
</script>

<style scoped>
.BlockTransfer {
  padding: 14px 20px;
  background: var(--bg-main);
  box-shadow: 16px 9px 18px var(--bg-second-color);
  border-radius: 16px;
}

.BlockTransferHeadingTitle {
  font-size: 14px;
  font-weight: 600;
}

.BlockTransfer .BlockTransferData {
  margin-bottom: 10px;
  border-radius: 6px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.9rem;
  color: var(--bg-connect-color);
  font-weight: 500;
}

.BlockTransfer .BlockTransferData span {
  white-space: pre;
}

.BlockTransferDesc {
  border: solid 1px var(--bg-second-color);
  border-radius: 10px;
  padding: 6px;
}

.BlockTransferDesc .BlockTransferDescWrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.BlockTransferDesc .BlockTransferDescText {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4rem;
}

.BlockTransferDesc .BlockTransferDescText .__Hight {
  color: var(--accent-second-btn);
  font-weight: 600;
  font-size: 14px;
}
</style>