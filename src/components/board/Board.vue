<template>
  <div class="board-container" id="board-scroll">
    <div>
      <div>
        <swiper
          :isImgExpand="false"
          :isShowButton="false"
          :loop="true"
          :imgCount="5"
        ></swiper>
      </div>
      <list />
    </div>
  </div>
</template>
<script>
import Swiper from '../common/Swiper.vue'
import List from './List.vue'
import BScroll from 'better-scroll'
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
    // 定义静态属性(state),不会绑定额外的数据
    // 静态属性特点：不去在模板上渲染
    this.scroll = new BScroll('#board-scroll')
  }
}
</script>
<style lang="scss" scoped>
  .board-container {
    height: 100%;
    >div {
      div:first-child {
        height: 2.4rem;
      }
    }
  }
</style>
