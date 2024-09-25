<template>
  <!--  <TwaMainLt>-->
  <!--  <template #Body>-->
  <div class="MainBodyWrapper">
    <div class="MainBannerRecom MainBannerRecom--mb-24">
      <BannerRecom/>
    </div>

    <div class="MainStartBtnWrapper MainStartBtnWrapper--mb-24">
      <MainStartBtnsGroup/>
    </div>

     <div class="MainStartBtnWrapper MainStartBtnWrapper--mb-24">
      <MainTwoStartBtnsGroup/>
    </div>


    <!--  Rec  -->
    <RecomProd/>

    <!---->
    <CartFixedQtBtn/>
  </div>
</template>
<!--  </TwaMainLt>-->
<!--</template>-->

<script setup>
import BannerRecom from '~/components/app/Main/Glb/BannerRecom.vue';
import MainStartBtnsGroup from '~/components/app/Main/Glb/Btn/MainStartBtnsGroup.vue';
import MainTwoStartBtnsGroup from "~/components/app/Main/Glb/Btn/MainTwoStartBtnsGroup.vue";
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";
import RecomProd from "~/components/app/Main/Catalog/RecomProd.vue";

definePageMeta({
  layout: "twa-default",
})

</script>

<style scoped>
.MainBodyWrapper {
  margin-bottom: 56px;
}

.MainBannerRecom--mb-24 {
  margin-bottom: 24px;
}

.MainStartBtnWrapper--mb-24 {
  margin-bottom: 24px;
}

</style>