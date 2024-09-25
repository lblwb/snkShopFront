<template>
  <div class="whereToStart">
    <button class="whereToStartButton" @click="$router.push({name: routeName})"
            v-haptic-engine>
      <div class="whereToStartBtnBundles">
        <div class="whereToStartBtnBundlesWrapper"
             style="">
          <div class="whereToStartBtnIcon" style="display:flex;">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99998 3.33331V12.6666M3.33331 7.99998H12.6666" stroke="#222" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="textContainer">
            <div class="mainText"><span class="subText">{{ title }}</span></div>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>

defineComponent({
  name: "DirectGlbBtn"
})

defineProps({
  title: {
    type: String,
  },
  routeName: {
    type: String,
    default: 'index'
  },
  routeParam: {
    type: Object
  }
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
