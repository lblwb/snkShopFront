<template>
  <div class="BannerRecom">
    <div class="BannerRecomWrapper">
      <div class="BannerRecomImage" style="">
        <img src="~/assets/images/home/banner_home.png"
             style=""/>
      </div>
    </div>
  </div>
</template>

<script>
defineComponent({
  name: "BannerRecom"
})
</script>

<style scoped>
.BannerRecomImage {
  max-width: 100vh;
  max-height: 50vh;
  height: 100%;
  border: solid 1px #ddd;
  border-radius: 24px;
  overflow: hidden
}

.BannerRecomImage img {
  width: 100%;
  height: 100%;
  max-height: 25vh;
  object-fit: cover;
}
</style>
