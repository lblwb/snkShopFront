<script lang="ts" setup>
import {BackButton, MainButton, useWebAppPopup, useWebAppBackButton, useWebAppMainButton} from "vue-tg";

const {showAlert} = useWebAppPopup();
const router = useRouter();

const backClkBtn = () => {
  // showAlert("Back");
  router.back();
}

const {onBackButtonClicked} = useWebAppBackButton();
onBackButtonClicked((e: any) => {
  console.log(e);
  // backBtnEvent.hideBackButton();
  backClkBtn();
});

// const {onMainButtonClicked, showMainButton} = useWebAppMainButton();


onMounted(() => {

})


</script>

<template>
  <!--  <BackButton text="Back" @click="backClkBtn" :visible="true"/>-->
</template>
