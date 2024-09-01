<template>
  <div v-if="loading" class="loading-page">
    <!-- <p>Loading...</p> -->
    <!-- <img src="~/assets/images/roulete-loading.gif" alt="" style="max-width: 420px; max-height: 420px;"> -->
    <div class="loading_wrapper">
      <div class="loading_logo">
        <img :src="getImageUrl('home/banner_home.png')" style="height: 14vh; max-height: 14vh">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getImageUrl} from "~/utils/assets/img";

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 500)

});
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #000000f0; */
  background: var(--bg-accent-color);
  opacity: 1;
  text-align: center;
  /* padding-top: 200px; */
  font-size: 30px;
  font-family: sans-serif;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);

  -moz-transition: all 0.8s ease-out; /* FF4+ */
  -o-transition: all 0.8s ease-out; /* Opera 10.5+ */
  -webkit-transition: all 0.8s ease-out; /* Saf3.2+, Chrome */
  -ms-transition: all 0.8s ease-out; /* IE10? */
  transition: all 0.8s ease-out;

}


.loading_wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.loading-page .loading_logo {
  /*margin-bottom: 24px;*/
  color: var(--accent-comp-high-color);
}

.loading_text {
  font-size: 20px;
}

.loadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: var(--text-accent-color);
}

</style>
