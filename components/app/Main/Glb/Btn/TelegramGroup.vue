<template>
  <div class="telegramGroup">
    <button class="telegramGroupBtn" v-haptic-engine>
      <div class="telegramGroupBtnWrapper">
        <div class="textContainer">
          <span class="mainText">Telegram Group</span>
          <span class="subText">TouchDown Gallery</span>
        </div>
        <div class="iconContainer">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="white"/>
            <path d="M17 24H31M31 24L25 30M31 24L25 18" stroke="#C42323" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </button>
  </div>
</template>

<script setup>
defineComponent({
  name: 'TelegramGroup',
});
</script>

<style scoped>
.telegramGroup {
  display: flex;
  flex: 1;
}

.telegramGroupBtn {
  display: flex;
  align-items: center;
  background-color: var(--accent-second-btn);
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 14px;
  flex: 1;
  border: none;
  border-radius: 20px;
}

.telegramGroupBtnWrapper {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  border: none;
  background: none;
}

.textContainer {
  margin-bottom: 36px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  text-align: left;
  max-width: 30vw;


}

.mainText {
  font-size: 14px;
  font-weight: bold;
}

.subText {
  font-size: 14px;
}
</style>
