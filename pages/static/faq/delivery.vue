<template>
  <div class="MainBodyWrapper">
    <div class="MainBodyHeading" style="margin-top: 32px;">
      <div class="MainBodyHeadingTitle" style="font-size: 20px; font-weight: 600; margin-bottom: 32px">
        FAQ / Delivery Info
      </div>
    </div>
    <div class="MainBodyBody">
      <div class="MainBodyBodyContent">
        <div class="FaqDeliveryInfo">
          <!-- Категории вопросов -->
          <FaqCategory
              category="Payments"
              :questions="['Question 1', 'Question 2', 'Question 3']"
          />
          <FaqCategory
              category="Shipping"
              :questions="['Question 1', 'Question 2', 'Question 3']"
          />
          <FaqCategory
              category="Returns"
              :questions="['Question 1', 'Question 2', 'Question 3']"
          />

          <!-- Footer -->
          <div class="FaqDeliveryInfo__Footer">
            <p class="FaqDeliveryInfo__NeedMoreAnswers">Need more answers?</p>
            <button class="FaqDeliveryInfo__AskButton">Ask your own question</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import FaqCategory from "~/components/app/Main/Static/Faq/FaqCategory.vue";

definePageMeta({
  layout: 'twa-default'
})


const $router = useRouter();
const $route = useRoute();
</script>

<style scoped>
.FaqDeliveryInfo {
}

.FaqDeliveryInfo__Title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.FaqDeliveryInfo__Footer {
  text-align: center;
  margin-top: 40px;
}

.FaqDeliveryInfo__NeedMoreAnswers {
  font-size: 16px;
  margin-bottom: 18px;
}

.FaqDeliveryInfo__AskButton {
  padding: 16px 20px;
  width: 100%;
  background-color: transparent;
  border: 1px solid var(--bg-primary-color);
  color: var(--text-accent-color);
  border-radius: 5px;
  cursor: pointer;
  text-align: start;
}

.FaqDeliveryInfo__AskButton:hover {
  background-color: #2980b9;
}
</style>