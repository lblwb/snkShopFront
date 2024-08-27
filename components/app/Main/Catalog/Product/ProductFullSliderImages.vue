<template>
  <div class="ProductFullBodyHeadingWrapper">
    <div class="ProductFullBodyImages"
         style="display: grid;     grid-auto-flow: column;     width: 100%;     overflow-x: auto;     scroll-snap-type: x mandatory;">
      <div class="ProductFullBodyImagesItem"
           style="padding-right: 10px; scroll-snap-align: start;     scroll-snap-stop: always;"
           v-for="image in productsImages" v-if="productsImages.length > 0">
        <div class="fullBodyImagesItemWrapper">
          <div class="fullBodyImagesItemImage"
               style="position: relative; padding-bottom: 64%;     width: calc(100vw - 20px);     display: block;"><img
              alt="images" sizes="100vw" :srcset="image.original" :src="image.original" decoding="async"
              data-nimg="fill"
              style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent; object-position: top; object-fit: contain;">
          </div>
        </div>
      </div>       <!-- no_image  -->
      <div class="ProductFullBodyImagesItem">
        <div class="fullBodyImagesItemImage"
             style="position: relative; padding-bottom: 64%;     width: calc(100vw - 20px);     display: block;"><img
            alt="images" sizes="100vw" :srcset="'/no_image.jpg'" src="~/assets/images/products/test.png"
            decoding="async" data-nimg="fill"
            style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent; object-position: top; object-fit: contain;">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineComponent({
  name: "ProductFullSliderImages",
})


defineProps({
  productsImages: {types: Array, default: []}
})
</script>
<style scoped></style>