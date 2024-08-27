<template>
  <div class="MainBodyWrapper">
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

<script setup>
import {useShopProductRecom} from "~/stores/shop/catalog/products/recom";
import CatalogPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";
import CatalogHeader from "~/components/app/Main/Catalog/CatalogHeader.vue";

definePageMeta({
  layout: 'twa-default'
})

const $router = useRouter();
const $route = useRoute();

const shopProductRecom = useShopProductRecom();

const products = reactive({
  list: computed(() => shopProductRecom.getProductsRecAll).value
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