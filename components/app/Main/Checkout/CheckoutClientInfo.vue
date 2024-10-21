<template>
  <div class="CartCheckoutClientInfo">
    <div class="checkoutClientInfoBlock">
      <div class="CartCheckoutClientInfoInput" style="margin-bottom: 18px">
        <label for="InputClFullName" style="margin-bottom: 8px; display: block;">Name</label>
        <input class="blur-input" placeholder="Enter first and last name" style="
    padding: 14px 14px;
    background: #fff;
    border-radius: 6px;
    width: 100%;
    border: solid 1px #EFEFF4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
" v-model="InputClFullname.value" required>
      </div>
      <div class="CartCheckoutClientInfoInput" style="margin-bottom: 18px">
        <label for="InputClPhone" style="margin-bottom: 8px; display: block;">Phone number</label>
        <input class="blur-input" type="phone" placeholder="Enter phone number" style="
    padding: 14px 14px;
    background: #fff;
    border-radius: 6px;
    width: 100%;
    border: solid 1px #EFEFF4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
" v-model="InputClPhone.value" required>
      </div>
      <div class="CartCheckoutClientInfoInput" style="margin-bottom: 18px">
        <label for="InputClName" style="margin-bottom: 8px; display: block;">E-mail</label>
        <input class="blur-input" type="email" placeholder="E-mail" style="
    padding: 14px 14px;
    background: #fff;
    border-radius: 6px;
    width: 100%;
    border: solid 1px #EFEFF4;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
" v-model="InputClEmail.value" required>
      </div>
    </div>
  </div>
</template>

<script setup>

defineComponent({
  name: 'CheckoutClientInfo',
});

const InputClFullname = defineModel("InputClFullname", {
  // required: true,
  default: () => {
    return {
      value: ""
    }
  }
})

const InputClPhone = defineModel("InputClPhone", {
  // required: true,
  default: () => {
    return {
      value: ""
    }
  }
})

const InputClEmail = defineModel("InputClEmail", {
  // required: true,
  default: () => {
    return {
      value: ""
    }
  }
})

</script>

<style scoped>
.checkoutClientInfoBlock {
  padding: 14px 12px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 18px;
}
</style>