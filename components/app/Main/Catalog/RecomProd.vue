<template>
  <div class="MainCatalog MainCatalog--mb-160">
    <div class="MainCatalogWrapper">
      <div class="MainCatalogHeader MainCatalogHeader--mb-16">
        <CatalogHeader title="Rec. Product" badge="All collections"/>
      </div>
      <div class="MainCatalogBody">
        <div class="MainCatalogBodyWrapper" v-if="productsRec.list && productsRec.list.length > 0">
          <CatalogPrdCardItem :product="product" v-for="product in productsRec.list" :key="product.name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CatalogHeader from "~/components/app/Main/Catalog/CatalogHeader.vue";
import CatalogPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";
import {useShopProductRecom} from "~/stores/shop/catalog/products/recom.ts";

defineComponent({
  name: "RecomProd",
});

const shopProductRecom = useShopProductRecom();

const productsRec = reactive({
  list: computed(() => shopProductRecom.getProductsRecAll)
})

onMounted(async () => {
  await shopProductRecom.fetchRecProducts();
})
</script>

<style scoped>

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