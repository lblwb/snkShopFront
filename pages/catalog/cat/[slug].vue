<template>
  <div class="MainBodyWrapper">


    <div class="MainCatalog MainCatalog--mb-160" style="margin-bottom: 8vh">
      <div class="MainCatalogWrapper">
        <div class="MainCatalogHeading" v-if="currentCat !== null" style="margin-bottom: 2vh">
          <CatalogHeader title="Category" :badge=" currentCat.name"/>
        </div>
        <div class="MainCatalogBody" v-if="currentCatProducts && currentCatProducts.length > 0">
          <div class="MainCatalogBodyWrapper">
            <TransitionGroup name="fade">
              <CatalogPrdCardItem :product="product" v-for="product in currentCatProducts" :key="product.name"
                                  class="animated animate_slideInUp"/>
            </TransitionGroup>
          </div>
        </div>
        <div class="MainCatalogBody" v-else>
          <div class="MainCatalogBodyText"
               style="margin-bottom: 16px; font-size: 24px; background: var(--bg-accent-color); border-radius: 16px; padding: 18px">
            <span> ... Adding new products</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-cards"
                 viewBox="0 0 24 24"
                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                 height="10em" width="10em" style="color: var(--accent-comp-low-color);">
              <path d="M0 0h24v24H0z" stroke="none"/>
              <rect x="4" y="4" width="6" height="16" rx="2"/>
              <rect x="14" y="4" width="6" height="10" rx="2"/>
            </svg>

          </div>
        </div>
      </div>
    </div>

    <template v-if="currentCatProducts.length > 8">
      <RecomProd/>
    </template>

    <CartFixedQtBtn/>
  </div>
</template>

<script setup>
import CatalogPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";
import CatalogHeader from "~/components/app/Main/Catalog/CatalogHeader.vue";
import {useShopPrdCat} from "~/stores/shop/catalog/products/cat.ts";
import RecomProd from "~/components/app/Main/Catalog/RecomProd.vue";

definePageMeta({
  layout: 'twa-default'
})


const $router = useRouter();
const $route = useRoute();

const shopProductCat = useShopPrdCat();

watchEffect(async () => {
  if ($route.params.slug !== null) {
    let routerCategorySlug = $route.params.slug;
    await shopProductCat.fetchByCatSlug(routerCategorySlug);
  }
})

onMounted(async () => {
  let routerCategorySlug = $route.params.slug;
  await shopProductCat.fetchByCatSlug(routerCategorySlug);
})

const currentCatProducts = computed(() => shopProductCat.getPrdByCat);
const currentCat = computed(() => shopProductCat.getPrdBySingeCatInfo)


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