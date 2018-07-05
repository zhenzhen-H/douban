<template>
  <swiper
    :imgCount="6"
    :isImgExpand="true"
    :isShowButton="true"
  ></swiper>
</template>
<script>
  import Swiper from '../common/Swiper.vue'
  export default {
    name: 'swipe',
    components: {
      Swiper
    }
  }
</script>
