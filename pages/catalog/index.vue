<template>
  <div class="MainBodyWrapper">

    <div class="MainCatalogCombos">
      <div class="MainCatalogCombosItem MainCatalog--mb-24" v-for="comboItem in combosRec" :key="comboItem.slug">
        <div class="MainCatalog MainCatalog--mb-18">
          <div class="MainCatalogWrapper">
            <div class="MainCatalogHeader MainCatalogHeader--mb-16">
              <CatalogHeader title="Combo" :badge="comboItem&& comboItem.name !=='' ?comboItem.name:''"/>
            </div>
            <div class="MainCatalogBody">
              <div class="MainCatalogBodyWrapper" v-if="comboItem.products && comboItem.products.length > 0">
                <CatComboPrdCardItem :product="product" v-for="product in comboItem.products" :key="product.name"/>
              </div>
            </div>
          </div>
        </div>
        <div class="MainCatalogCombosItemAction">
          <div class="combosItemActionBtn">
            <button class="combosItemActionBtn__btn"
                    style="padding: 12px 24px; width: 100%; border-radius: 24px; border: 2px solid #C42323;"
                    @click="addComboProductToCart(comboItem)">
              <div class="combosItemActionBtnWrapper"
                   style="display: flex; align-items: center; justify-content: space-between">
                <div class="combosItemActionBtnTitle" style="font-size: 13px; font-weight: 600; color: #C42323;">
                  Add Combo to cart
                </div>
                <div class="combosItemActionBtnIcon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99998 3.33331V12.6666M3.33331 7.99998H12.6666" stroke="#C42323" stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

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
        </div>
      </div>
    </div>
    <CartFixedQtBtn/>
  </div>
</template>

<script setup>
import {useShopProductRecom} from "~/stores/shop/catalog/products/recom";
import CatalogPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatalogPrdCardItem.vue";
import CartFixedQtBtn from "~/components/app/Main/Cart/CartFixedQtBtn.vue";
import CatalogHeader from "~/components/app/Main/Catalog/CatalogHeader.vue";
import {useShopCombsPrdRecom} from "~/stores/shop/catalog/products/combos/recom";
import CatComboPrdCardItem from "~/components/app/Main/Catalog/CatalogProduct/CatComboPrdCardItem.vue";
import {useCartStore} from "~/stores/shop/cart/index";

definePageMeta({
  layout: 'twa-default'
})

const $router = useRouter();
const $route = useRoute();

const cartStore = useCartStore();

const shopProductRecom = useShopProductRecom();
const shopCombsRecom = useShopCombsPrdRecom();

const products = reactive({
  list: computed(() => shopProductRecom.getProductsRecAll).value
})

// const getProductQty = (productId: string) => cartStore.getProductQty(productId);
//
// const handleIncrease = (product: any) => {
//   setTimeout(() => {
//     const existingQty = getProductQty(product.idx);
//     if (existingQty === 0) {
//       cartStore.addItem(product);
//     } else {
//       cartStore.increaseQty(product.idx)
//     }
//   }, 500);
// };

const addComboProductToCart = (comboItem) => {
  comboItem.products.forEach(product => {
      cartStore.addItem(product);
  })
}

const combosRec = computed(() => shopCombsRecom.getCombosRecAll);

useAsyncData(async () => {
  await shopProductRecom.fetchRecProducts();
  await shopCombsRecom.fetchCombosRecProducts();
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

.MainCatalog--mb-18 {
  margin-bottom: 18px;
}

.MainCatalog--mb-24 {
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