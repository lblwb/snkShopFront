<template>
  <div class="startBtnGroupWrapper">
    <div class="startBtnGroupRowWrapper" style="display: flex; flex-flow: row wrap; gap: 8px;">
      <div class="startBtnGroupRow startBtnGroupRowMin">
        <LinkBlockBtn title="Join the referral program and earn"/>
      </div>
      <div class="startBtnGroupRow">
        <div class="startBtnGroupRowColumn" style="display: flex; flex-flow: column wrap; gap: 6px;">
          <div class="startBtnGroupRowColumnItem">
            <DirectGlbBtn title="How to pay with crypto?" routeName="static-faq-delivery"/>
          </div>
          <div class="startBtnGroupRowColumnItem">
            <DirectGlbBtn title="Shipping Delivery FAQ" routeName="static-faq-delivery"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RewardPoints from "~/components/app/Main/Glb/Btn/RewardPoints.vue";
import TelegramGroup from "~/components/app/Main/Glb/Btn/TelegramGroup.vue";
import DirectGlbBtn from "~/components/app/Main/Glb/Btn/DirectGlbBtn.vue";
import LinkBlockBtn from "~/components/app/Main/Glb/Btn/LinkBlockBtn.vue";

defineComponent({
  name: "MainTwoStartBtnsGroup",
})
</script>

<style scoped>
.startBtnGroupRow {
  display: flex;
  flex: 1;
  width: 100%;
}

.startBtnGroupColumn {
  display: flex;
  flex-flow: column;
  width: 100%;
}

.startBtnGroupRowColumn {
  width: 100%;
  display: flex;
  align-items: center;
}

.startBtnGroupRowColumnItem {
  flex: 1;
  height: auto;
  width: 100%;
}


.startBtnGroupRowMin {
  max-width: 26vh !important;
}
</style>
