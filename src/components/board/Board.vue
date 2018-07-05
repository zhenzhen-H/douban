<template>
  <div class="board-container">
    <swiper
      :isImgExpand="false"
      :isShowButton="false"
    ></swiper>
  </div>
</template>
<script>
import Swiper from '../common/Swiper.vue'
export default {
  data() {
    return {

    }
  },
  methods: {},
  components: {
    Swiper
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
  .board-container {
    height: 2.4rem;
  }
</style>
