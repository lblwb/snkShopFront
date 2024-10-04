<template>
  <div class="MainBodyWrapper">


    <div class="MainCatalog MainCatalog--mb-160" style="margin-bottom: 8vh">
      <div class="MainCatalogWrapper">
        <!--        {{ currentCat }}-->
        <div class="MainCatalogHeading" v-if="currentCat !== null && currentCat.title"
             style="margin-bottom: 2vh">
          <CatalogHeader title="Search product by" :badge="currentCat.title"/>
        </div>
        <div class="MainCatalogBody" v-if="currentProductsByText && currentProductsByText.length > 0">
          <div class="MainCatalogBodyWrapper">
            <TransitionGroup name="fade">
              <CatalogPrdCardItem :product="product" v-for="product in currentProductsByText" :key="product.name"
                                  class="animated animate_slideInUp"/>
            </TransitionGroup>
          </div>
        </div>
        <div class="MainCatalogBody" v-else>
          <div class="MainCatalogBodyText"
               style="margin-bottom: 16px; font-size: 24px; background: var(--bg-accent-color); border-radius: 16px; padding: 18px">
            <span style="
    font-size: 17px;
    font-weight: 600;
"> ... Adding new products</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-cards"
                 viewBox="0 0 24 24"
                 stroke-width="2" stroke="var(--text-second-color)" fill="none" stroke-linecap="round"
                 stroke-linejoin="round"
                 height="10em" width="10em" style="color: var(--accent-comp-low-color);">
              <path d="M0 0h24v24H0z" stroke="none"/>
              <rect x="4" y="4" width="6" height="16" rx="2"/>
              <rect x="14" y="4" width="6" height="10" rx="2"/>
            </svg>

          </div>
        </div>
      </div>
    </div>
    <CartFixedQtBtn/>
  </div>
</template>

<script setup>
import CatalogPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";
import CatalogHeader from "~/components/app/Main/Catalog/CatalogHeader.vue";
import {useShopSearchPrd} from "~/stores/shop/catalog/products/search/index";
// import RecomProd from "~/components/app/Main/Catalog/RecomProd.vue";


definePageMeta({
  layout: 'twa-default'
})


const $router = useRouter();
const $route = useRoute();


const routerPrdSrhText = computed(() => $route.params.text);

const shopProductSearch = useShopSearchPrd();

watchEffect(async () => {
  let text = routerPrdSrhText.value;
  if (text !== null && text.length > 1) {
    await shopProductSearch.fetchBySearchText(shopProductSearch.getPrdSchText);
  }
})

onBeforeRouteLeave(async () => {
  await shopProductSearch.setSearchText("");
})

onMounted(async () => {
  let text = routerPrdSrhText.value;
  if (text !== null && text.length > 1) {
    console.log(text);
    await shopProductSearch.fetchBySearchText(shopProductSearch.getPrdSchText);
  }
})

const currentProductsByText = shopProductSearch.getPrdBySchTextData;
const currentCat = {title: shopProductSearch.getPrdSchText};

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