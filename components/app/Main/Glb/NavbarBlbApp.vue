<template>
  <div class="navbarBlbApp">
    <div class="navbarBlbAppWrapper">
      <div class="navbarBlbAppList" style="">
        <div class="navbarBlbAppListItem __Main" :class="{__Active: $route && $route.name === 'index'}"
             @click="$router.push({name: 'index'})" style="" v-haptic-engine>
          <div class="navbarBlbAppListItemWrapper">
            <div class="navbarBlbAppListItemIcon">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.5 21V15C9.5 14.4696 9.71071 13.9609 10.0858 13.5858C10.4609 13.2107 10.9696 13 11.5 13H13.5C14.0304 13 14.5391 13.2107 14.9142 13.5858C15.2893 13.9609 15.5 14.4696 15.5 15V21M5.5 12H3.5L12.5 3L21.5 12H19.5V19C19.5 19.5304 19.2893 20.0391 18.9142 20.4142C18.5391 20.7893 18.0304 21 17.5 21H7.5C6.96957 21 6.46086 20.7893 6.08579 20.4142C5.71071 20.0391 5.5 19.5304 5.5 19V12Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="navbarBlbAppListItemTitle">
              Home
            </div>
          </div>
        </div>
        <div class="navbarBlbAppListItem" v-for="catItem in catg.all.data" v-if="catg.all.data"
             @click="$router.push({name:'catalog-cat-slug', params: {
               slug: catItem.slug
             }})"
             :class="{__Active: $route && ($route.name.includes('catalog-cat') && $route.params.slug === catItem.slug)}"
             v-haptic-engine>
          <div class="navbarBlbAppListItemWrapper">
            <div class="navbarBlbAppListItemIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 13L15 11M8 18V17C8 15.9391 7.57857 14.9217 6.82843 14.1716C6.07828 13.4214 5.06087 13 4 13H3M10 12L11.5 9M4 6H9.426C9.60063 6.00012 9.77219 6.04598 9.9236 6.133C10.075 6.22002 10.201 6.34517 10.289 6.496L11.353 8.319C11.5574 8.66957 11.8309 8.97502 12.1568 9.21686C12.4827 9.4587 12.8542 9.63191 13.249 9.726L17.926 10.84C18.8012 11.0483 19.5806 11.5455 20.1384 12.2513C20.6961 12.9571 20.9997 13.8304 21 14.73V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="navbarBlbAppListItemTitle">
              {{ catItem.name }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {useShopCat} from "~/stores/shop/catalog/categories/index";

defineComponent({
  name: "NavbarBlbApp",
});

const storeShopCat = useShopCat();

const $router = useRouter();
const $route = useRoute();

let catg = reactive({
  all: {
    data: storeShopCat.getAllCat ? computed(() => storeShopCat.getAllCat).value : []
  }
});


onMounted(() => {
  // catg.all.data = ;
});

</script>

<style scoped>

.navbarBlbApp {
  margin-bottom: 16px;
}

.navbarBlbAppList {
  display: flex;
  align-items: center;
  overflow-x: unset;
  overflow-y: auto;
  gap: 0px 14px;
  position: relative;
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.navbarBlbAppListItemWrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navbarBlbAppList::-webkit-scrollbar {
    display: none;
}

.navbarBlbAppListItem {
  padding: 8px 10px;
  border: solid 2px #fff;
  border-radius: 20px;
  color: #000;
  position: relative;
  z-index: 1;
  display: flex;
  cursor: pointer;
}

.navbarBlbAppListItem.__Main {
  /*position: sticky;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*left: 0;*/
  z-index: 4;
  color: #000;
  background: #fff;
}

.navbarBlbAppListItem.__Active {
  border: solid 2px transparent;
  background: #fff;
}

.navbarBlbAppListItem.__Active::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  border-radius: 19px;
  background: radial-gradient(circle at center, #4867F5, #4659F0 14.29%, #7255CA 28.57%, #8852B8 42.86%, #B35496 57.14%, #C85486 71.43%, #D87B87 85.71%, #E19038 100%);
  border: 1px solid transparent;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.navbarBlbAppListItem:hover,
.navbarBlbAppListItem:focus{
  background: var(--bg-accent-color);
  opacity: 0.7;
}

.navbarBlbAppListItemIcon {
  display: flex;
  align-items: center;
}

.navbarBlbAppListItemTitle {
  text-wrap: nowrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
}
</style>
