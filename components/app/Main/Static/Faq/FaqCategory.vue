<template>
  <div class="FaqDeliveryInfo__Category">
    <div class="FaqDeliveryInfo__CategoryTitle">
      {{ category }}

      <span class="FaqDeliveryInfo__CategoryTitleLine"></span>
    </div>
    <ul class="FaqDeliveryInfo__QuestionsList">
      <FaqQuestion
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
      />
    </ul>
  </div>
</template>

<script setup>
import FaqQuestion from './FaqQuestion.vue'

defineProps({
  category: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.FaqDeliveryInfo__Category {
  margin-bottom: 30px;
}

.FaqDeliveryInfo__CategoryTitle {
  font-size: 18px;
  font-weight: bold;
  display: block;
}

.FaqDeliveryInfo__CategoryTitleLine {
  border-bottom: 2px solid #e74c3c;
  display: block;
  width: 10vw;
  margin-top: 10px;
}

.FaqDeliveryInfo__QuestionsList {
  list-style-type: none;
  padding: 16px 0;
}
</style>