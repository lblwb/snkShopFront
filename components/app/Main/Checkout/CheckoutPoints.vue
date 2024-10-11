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
                d="M20 7.5L12 3L4 7.5M20 7.5V16.5L12 21M20 7.5L12 12M12 21L4 16.5V7.5M12 21V12M4 7.5L12 12M16 5.25L8 9.75"
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