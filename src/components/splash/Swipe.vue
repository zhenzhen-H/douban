<template>
  <swiper
    :imgCount="6"
    :isImgExpand="true"
    :isShowButton="true"
    :loop="false"
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
