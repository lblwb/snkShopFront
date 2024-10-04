<template>
  <div class="ProductFullBodyHeadingWrapper">
    <div class="ProductFullBodyImages">
      <div class="ProductFullBodyImagesItem"
           v-for="image in productsImages" v-if="productsImages.length > 0">
        <div class="fullBodyImagesItemWrapper">
          <div class="fullBodyImagesItemImage"
               style="">
            <img
                alt="images" sizes="100vw" :srcset="getImageUrl(image.original)" :src="getImageUrl(image.original)"
                decoding="async"
                data-nimg="fill"
                style="position: absolute;height: 100%;width: 26vh;max-width: 30vh;inset: 0px;color: transparent;object-position: center center;object-fit: contain;border-radius: 20px;background: rgb(255, 255, 255);">
          </div>
        </div>
      </div>       <!-- no_image  -->
      <div class="ProductFullBodyImagesItem" v-else>
        <div class="fullBodyImagesItemImage"
             style="position: relative; padding-bottom: 64%;   width: calc(100vw - 20px);     display: block;">
          <img
              alt="images" sizes="100vw" :srcset="getImageUrl('static/media/test.png')"
              :src="getImageUrl('static/media/test.png')"
              decoding="async" data-nimg="fill"
              style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent; object-position: top; object-fit: contain; border-radius: 20px;">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {getImageUrl} from "~/utils/assets/img";

defineComponent({
  name: "ProductFullSliderImages",
})


defineProps({
  productsImages: {
    types: Array,
    default: []
  }
})
</script>
<style>
.ProductFullBodyImages {
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.ProductFullBodyImagesItem {
  padding-right: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.fullBodyImagesItemImage {
  position: relative;
  width: calc(100vw - 24px);
  display: block;
  padding: 18vh;
  overflow: hidden;
}

.ProductFullBodyImagesItem .fullBodyImagesItemImage img {
  position: absolute;
  height: 100%;
  inset: 0px;
  color: transparent;
  border-radius: 20px;
  background: rgb(255, 255, 255);
  object-fit: cover;
  object-position: center;
}

.ProductFullBodyImagesItem:only-child .fullBodyImagesItemImage img {
  min-width: 100%;
  max-width: 100%;
}

.ProductFullBodyImagesItem:has(> li:only-child) .fullBodyImagesItemImage img {
  min-width: 26vh;
  max-width: 30vh;
}

</style>