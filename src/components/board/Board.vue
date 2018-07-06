<template>
  <div class="board-container">
    <swiper
      :isImgExpand="false"
      :isShowButton="false"
    ></swiper>
    <list />
  </div>
</template>
<script>
import Swiper from '../common/Swiper.vue'
import List from './List.vue'
export default {
  name: 'Board',
  data() {
    return {

    }
  },
  methods: {},
  components: {
    Swiper,
    List
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
