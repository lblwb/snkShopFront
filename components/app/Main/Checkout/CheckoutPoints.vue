<template>
  <div class="CartCheckoutPointMap" style="margin-bottom: 18px">

    <!--    {{ InputPrcCntryDelSel.list }}-->

    <label for="InputPoints" style="margin-bottom: 8px; display: block;">Parsel Station</label>
    <div class="CartCheckoutSelectPayInput">
      <SelectBtnCityList style="background: #fff; border-radius: 8px; padding: 0;"
                         selectDefTitle="Select Parsel station"
                         :cities="InputPrcCntryDelSel.list"
                         v-model:citySelected="InputPrcCntryDelSel.selected"
                         selectOptionIdField="zip_code">
        <template #Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 19H6C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V8C3 7.20435 3.31607 6.44129 3.87868 5.87868C4.44129 5.31607 5.20435 5 6 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V12.5M3 10H21M16 19H22M22 19L19 16M22 19L19 22M7.005 15H7.01M11 15H13"
                stroke="#FF1919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template #Option="{ option }">
          {{ option.name }} — {{ option.zip_code }} zip.
        </template>
      </SelectBtnCityList>
    </div>
    <label for="InputPointsLabel" style="margin-bottom: 8px; display: block; color: var(--accent-second-color);"
           v-if="props.InputCountryDelSel.selected == undefined || props.InputCountryDelSel.selected == null">select
      point-station</label>
  </div>
</template>

<script setup>
import SelectBtnCityList from "~/components/app/Main/Form/SelectBtnCityList.vue";

defineComponent({
  name: 'CheckoutPoints',
});

const props = defineProps({
  InputCountryDelSel: {
    type: Object,
  }
});

const InputPrcCntryDelSel = reactive({
  list: [],
  selected: null,
});

const $emit = defineEmits(['update:InputPrcCntryDelSel'])


watch(InputPrcCntryDelSel, (newValue) => {
  $emit('update:InputPrcCntryDelSel', newValue);
});

async function changePoint(e) {
  console.log(e);
  // $emit('update:InputCountryDelSel',{
  // })
}

async function fetchPoints() {
  const {$axios} = useNuxtApp();

  let props_selected = props.InputCountryDelSel.selected;
  if (props_selected !== undefined && props_selected !== null && props_selected.id !== undefined) {
    const {data} = await $axios.get("/api/v1/lp_nt/by_cty", {
      params: {
        cty: props_selected.id
      }
    });


    // const data = result.data;

    // if (data.success) {
    console.log(InputPrcCntryDelSel);

    // InputPrcCntryDelSel.set({
    //   list: data.points,
    // })
    // InputPrcCntryDelSel.list = data.points;

    InputPrcCntryDelSel.list = data.points;
    //
    // $emit("update:InputCountryDelSel", {
    //   list: InputPrcCntryDelSel.list,
    //   selected: InputPrcCntryDelSel.selected
    // })
    // InputPrcCntryDelSel.selected = null;
    // }

    // console.log(props.InputCountryDelSel, InputPrcCntryDelSel);
    // }
  }
}

watchEffect(async () => {
  await fetchPoints();
});

// useAsyncData(async () => {
//   await fetchPoints();
// });

</script>

<style scoped>

</style>