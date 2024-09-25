<template>
  <div class="catalogHeaderContainer">
    <div class="catalogHeaderTitle">
      {{ title }} —
    </div>
    <div class="catalogHeaderBadge" v-if="badge">
      {{ badge }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title'
  },
  badge: {
    type: String,
    required: true,
    default: 'Desc'
  }
})
defineComponent({
  name: "CatalogHeader",
})
</script>

<style>
.catalogHeaderContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*background-color: #f5f5f5; !* Example background color *!*/
  border-radius: 8px;
}

.catalogHeaderTitle {
  font-size: 16px;
  font-weight: 500;
}

.catalogHeaderBadge {
  font-family: 'Inter', sans-serif;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  /*font-size: 14px;*/
  font-size: 14px;
  line-height: 18px;
  font-style: normal;
  font-weight: 600;
}
</style>
