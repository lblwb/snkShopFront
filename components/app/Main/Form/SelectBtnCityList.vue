<template>
  <div class="select-trigger" @blur="hiddenSelect">
    <button @click="toggleSelect" class="select-button" :class="{'__Placeholder': selectedOption !== null}">
      <span class="icon">
        <slot name="Icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17L11 13L7 12L16 8L12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </slot>
      </span>
      <span>{{ selectedOption !== null ? selectedOption.name : selectDefTitle }}</span>


      <!--      :class="['arrow', isOpen ? 'up' : 'down']"-->
      <div v-if="isOpen" class="arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9 13L12 10L15 13M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
              stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


      </div>

      <div v-else class="arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15 11L12 14L9 11M12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3Z"
              stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

    </button>
    <!--    -->
    <ul v-if="isOpen" class="options" @blur="hiddenSelect" @mouseout="hiddenSelect" @focusout="hiddenSelect"
        style="max-height: 22vh; overflow-y:auto" v-click-outside="hiddenSelect">
      <li v-for="option in filteredOptions" :key="option[props.selectOptionIdField]" @click="selectOption(option)"
          :class="{'selected': option == selectedCity }">

        <slot name="Option" :option="option">
          {{ option.name }}
        </slot>

      </li>
    </ul>
  </div>
</template>

<script setup>
import {vClickOutside} from 'maz-ui'
import {ref, computed, watch} from 'vue';

const props = defineProps({
  selectDefTitle: {
    default: "Выберите город",
    type: String
  },
  selectOptionIdField: {
    default: "idx",
    type: String
  },
  selectedCity: {
    default: null,
    type: Object
  },

  cities: {
    default: () => [],
    type: Array
  }
});

const emit = defineEmits(['citySelected']);

const isOpen = ref(false);
const options = ref(props.cities);
let selectedOption = ref(props.selectedCity);

// Вычисляемое свойство для фильтрации опций
const filteredOptions = computed(() => {
  return options.value.filter(option => option[props.selectOptionIdField] !== (selectedOption.value ? selectedOption.value[props.selectOptionIdField] : null));
});

// Следим за изменениями в props.cities и сбрасываем выбранный город при необходимости
watch(() => props.cities, (newVal, oldVal) => {
  options.value = newVal;
  if (selectedOption.value && !newVal.some(city => city[props.selectOptionIdField] === selectedOption.value[props.selectOptionIdField])) {
    selectedOption.value = null;
    emit('citySelected', null); // Отправляем null для сброса выбранного города в родительский компонент
  }
});

// Методы компонента
const toggleSelect = () => {
  if (props.cities.length > 0) {
    isOpen.value = !isOpen.value;
  }
};

const hiddenSelect = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 60)
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit('update:citySelected', option); // Отправляем выбранный город в родительский компонент
}

</script>

<style scoped>
.select-trigger {
  position: relative;
  width: 100%;
  flex: auto;
}

.select-button {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid var(--brd-second-color);
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  min-width: 10vw;
  width: 100%;
  color: #333;
  min-height: 44px;
}

.select-button .icon {
  margin-right: 10px;
  display: flex;
  color: var(--accent-second-color);
}

.arrow {
  margin-left: auto;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: center;
}

.arrow.up {
  border-bottom: 5px solid black;
}

.arrow.down {
  border-top: 5px solid black;
}

.options {
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  position: absolute;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  /*z-index: 1;*/
  overflow: hidden;
  z-index: 20;
  font-weight: 500;
  /*max-width: 56vw;*/
}

.options li {
  padding: 10px 15px;
  cursor: pointer;
  color: #555;
}

.options li:hover {
  background-color: #f5f5f5;
  color: #222;
}

.options li:focus {
  background-color: #f5f5f5;
  color: #222;
}

.selected {
  background-color: #f5f5f5;
  color: red;
}
</style>
