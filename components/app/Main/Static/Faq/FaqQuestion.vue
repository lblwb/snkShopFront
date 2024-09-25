<template>
  <li class="FaqDeliveryInfo__QuestionItem">
    <a href="#" class="FaqDeliveryInfo__QuestionLink">{{ question }}</a>
    <span class="FaqDeliveryInfo__Icon">↓</span>
  </li>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.FaqDeliveryInfo__QuestionItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.FaqDeliveryInfo__QuestionLink {
  text-decoration: none;
  color: var(--text-accent-color);
  font-weight: 500;
}

.FaqDeliveryInfo__Icon {
  font-size: 18px;
}
</style>