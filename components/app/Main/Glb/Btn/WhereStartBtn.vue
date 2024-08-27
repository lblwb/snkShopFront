<template>
  <div class="whereToStart">
    <button class="whereToStartButton" @click="$router.push({name: 'catalog'})" v-haptic-engine>
      <div class="whereToStartBtnBundles">
        <div class="whereToStartBtnBundlesWrapper"
             style="">
          <div class="whereToStartBtnIcon" style="display:flex;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9.18297 6.117C7.88897 5.85713 6.5454 6.03118 5.36033 6.61218C4.17526 7.19318 3.21483 8.14872 2.62779 9.33081C2.04074 10.5129 1.85983 11.8556 2.11309 13.1509C2.36635 14.4462 3.03963 15.6218 4.02867 16.4958C5.0177 17.3697 6.2673 17.8931 7.58393 17.985C8.90056 18.0769 10.2107 17.7321 11.3116 17.004C12.4124 16.2759 13.2424 15.2051 13.6731 13.9575C14.1038 12.7099 14.1112 11.3552 13.694 10.103M14.813 17.883C16.1083 18.1442 17.4537 17.9704 18.6402 17.3887C19.8267 16.807 20.788 15.8499 21.3748 14.6659C21.9616 13.4819 22.1412 12.1373 21.8856 10.8408C21.63 9.54436 20.9535 8.36852 19.9613 7.49586C18.969 6.62319 17.7164 6.10251 16.3978 6.01465C15.0793 5.92678 13.7687 6.27665 12.6694 7.00993C11.5701 7.74322 10.7436 8.8189 10.3182 10.07C9.89288 11.3211 9.89243 12.6776 10.317 13.929"
                  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="textContainer">
            <div class="mainText">Where to start? <span class="subText">Product Bundles</span></div>
          </div>
        </div>
      </div>
      <div class="arrowIcon" style="display: flex;flex-flow: row wrap;align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
defineComponent({
  name: "WhereStartBtn"
})

const $router = useRouter();
const $route = useRoute();
</script>

<style scoped>
.whereToStart {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.whereToStartButton {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border: none;
  padding: 18px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 20px;
}

.whereToStartButton:hover,
.whereToStartButton:focus {
  opacity: 0.8;
}


.whereToStartBtnBundlesWrapper {
  display: flex;
  flex-flow: row;
  align-items: baseline;
  gap: 6px;
  width: 100%;
}

.textContainer {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  max-width: 13vh;
  width: 100%;
  text-align: left;
}

.mainText {
  font-size: 14px;
  font-weight: bold;
}

.subText {
  font-size: 14px;
  color: var(--accent-comp-high-color);
}

.arrowIcon {
  color: var(--accent-comp-high-color);
}

.arrowIcon > svg {
  width: 24px;
  height: 24px;
  color: currentColor;
}
</style>
