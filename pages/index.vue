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

    <div class="MainCatalog MainCatalog--mb-160">
      <div class="MainCatalogWrapper">
        <div class="MainCatalogHeader MainCatalogHeader--mb-16">
          <CatalogHeader title="Rec. Product" badge="All collections"/>
        </div>
        <div class="MainCatalogBody">
          <div class="MainCatalogBodyWrapper" v-if="products.list && products.list.length > 0">
            <CatalogPrdCardItem :product="product" v-for="product in products.list" :key="product.name"/>
          </div>
          <CartFixedQtBtn/>
        </div>
      </div>
    </div>
  </div>
</template>
<!--  </TwaMainLt>-->
<!--</template>-->

<script setup>
import {useShopProductRecom} from "~/stores/shop/catalog/products/recom";

definePageMeta({
  layout: "twa-default",
})

import BannerRecom from '~/components/app/Main/Glb/BannerRecom.vue';
import CatalogHeader from '~/components/app/Main/Catalog/CatalogHeader.vue';
import CatalogPrdCardItem from '~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue';
import MainStartBtnsGroup from '~/components/app/Main/Glb/Btn/MainStartBtnsGroup.vue';
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";

// import {getImageUrl} from "~/utils/assets/img";


const shopProductRecom = useShopProductRecom();

const products = reactive({
  list: computed(() => shopProductRecom.getProductsRecAll).value
})


// Определение списка продуктов
// const products = reactive({
//   list: [
//
//   ]
// })

// function showPopup() {
//   console.log(window.Telegram.WebApp)
//   // window.Telegram.WebApp.HapticFeedback.selectionChanged()
//   // window.Telegram.WebApp.setHeaderColor("green")
//   // window.Telegram.WebApp.showPopup("test", () => alert("Popup opened"))
// }
//
// function closeApp() {
//   console.log(window.Telegram.WebApp)
//   alert("The application was closed!")
//   window.Telegram.WebApp.close()
// }
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

.MainCatalog--mb-160 {
  margin-bottom: 160px;
}

.MainCatalogHeader--mb-16 {
  margin-bottom: 16px;
}

.MainCatalogBodyWrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 14px;
}
</style>