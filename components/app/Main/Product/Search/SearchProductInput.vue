<template>
  <div class="searchProduct">
    <div class="searchProductWrapper">
      <div class="searchProductBlock">
        <div
            class="searchProductBlockWrapper"
            style="display: flex; align-items: center; gap: 10px;"
        >
          <div class="searchProductBlockIcon" style="flex: 0;">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M17.5 17.5L12.5 12.5M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
                  stroke="#939397"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="searchProductBlockInput" style="flex: 1;">
            <div class="searchProductBlockInputBox">
              <input
                  type="text"
                  placeholder="Finding Snickers sneakers"
                  @input="debouncedHandleSearch"
                  :value="shopProductSearch.getPrdSchText"
                  @keyup.enter="handleSearch"
                  v-haptic-engine
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useShopSearchPrd} from "~/stores/shop/catalog/products/search/index";

const shopProductSearch = useShopSearchPrd();
//
const $router = useRouter();
const $route = useRoute();
// Определяем реактивное состояние
const searchProduct = reactive({
  text: '',
});

// Функция дебаунса
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// Основная функция поиска
const performSearch = async (e) => {
  // console.log('Поиск по запросу:', searchProduct.text);

  if (e.target.value.length > 15) {
    return;
  }

  await shopProductSearch.setSearchText(e.target.value);

  if (e.target.value === "") {
    return $router.push('/');
  } else {
    await shopProductSearch.fetchBySearchText(shopProductSearch.getPrdSchText);
    //
    return $router.push({
      name: 'catalog-search-text',
      params: {
        text: shopProductSearch.getPrdSchText,
      },
    })
  }

};

const debouncedHandleSearch = debounce(await performSearch, 800);
const handleSearch = () => {
  performSearch();
};
</script>

<style scoped>
.searchProduct {
  margin-bottom: 16px;
}

.searchProductBlock {
  background: #fff;
  padding: 10px 14px;
  border-radius: 24px;
}

.searchProductBlockInputBox {
  width: 100%;
  height: 100%;
}

.searchProductBlockInputBox input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.searchProductBlockInputBox input::placeholder {
  color: #9A9A9E;
}
</style>
