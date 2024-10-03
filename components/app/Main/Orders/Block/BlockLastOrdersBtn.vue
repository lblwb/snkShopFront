<template>
  <div class="BlockLastOrders">
    <div class="BlockLastOrdersHeading">

    </div>
    <div class="BlockLastOrdersBtn">
      <LinkToBlockBtn title="My Orders" routeName="user-orders" />
    </div>
  </div>
</template>

<script setup>

import LinkBlockBtn from "~/components/app/Main/Glb/Btn/LinkBlockBtn.vue";
import LinkToBlockBtn from "~/components/app/Main/Glb/Btn/LinkToBlockBtn.vue";
// import DirectGlbBtn from "~/components/app/Main/Glb/Btn/DirectGlbBtn.vue";

defineComponent({
  name: 'BlockLastOrdersBtn'
})
</script>

<style scoped>
.BlockLastOrdersHeading{
  margin-bottom: 24px;
}
</style>