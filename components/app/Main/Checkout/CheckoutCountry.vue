<template>
  <div class="CartCheckoutSelectCountry" style="margin-bottom: 18px">
    <label for="InputCountry" style="margin-bottom: 8px; display: block;">Country</label>
    <div class="CartCheckoutSelectCountryWrap">
      <SelectBtnCityList style="background: #fff; border-radius: 8px; padding: 0;"
                         selectDefTitle="Select Country" selectOptionIdField="id"
                         :cities="InputCountryDelSel.list" v-model:citySelected="InputCountryDelSel.selected">
        <template #Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 19H6C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V8C3 7.20435 3.31607 6.44129 3.87868 5.87868C4.44129 5.31607 5.20435 5 6 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V12.5M3 10H21M16 19H22M22 19L19 16M22 19L19 22M7.005 15H7.01M11 15H13"
                stroke="#FF1919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
      </SelectBtnCityList>
    </div>
    <label for="InputCountry" style="margin-bottom: 8px; display: block; color: var(--accent-second-color);"
           v-if="InputCountryDelSel.selected === undefined || InputCountryDelSel.selected === null">select
      country</label>
  </div>

</template>

<script setup>

import SelectBtnCityList from "~/components/app/Main/Form/SelectBtnCityList.vue";

defineComponent({
  name: 'CheckoutCountry',
});


const InputCountryDelSel = defineModel('InputCountryDelSel', {
  required: true,
  default: () => {
    return {selected: null, list: []}
  }
})

</script>

<style scoped>
.checkoutClientInfoBlock {
  padding: 14px 12px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 18px;
}
</style>