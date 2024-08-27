<template>
  <div class="startBtnGroupWrapper">
    <div class="startBtnGroupRowWrapper" style="display: flex; flex-flow: row wrap; gap: 8px;">
      <div class="startBtnGroupRow">
        <div class="startBtnGroupRowColumn" style="display: flex; flex-flow: column wrap; gap: 6px;">
          <div class="startBtnGroupRowColumnItem">
            <WhereStartBtn/>
          </div>
          <div class="startBtnGroupRowColumnItem">
            <RewardPoints/>
          </div>
        </div>
      </div>
      <div class="startBtnGroupRow startBtnGroupRowMin">
        <TelegramGroup/>
      </div>
      <div class="startBtnGroupColumn">
        <DeliveryGuaBtn/>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhereStartBtn from "~/components/app/Main/Glb/Btn/WhereStartBtn.vue";
import RewardPoints from "~/components/app/Main/Glb/Btn/RewardPoints.vue";
import TelegramGroup from "~/components/app/Main/Glb/Btn/TelegramGroup.vue";
import DeliveryGuaBtn from "~/components/app/Main/Glb/Btn/DeliveryGuaBtn.vue";

defineComponent({
  name: "MainStartBtnsGroup",
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
