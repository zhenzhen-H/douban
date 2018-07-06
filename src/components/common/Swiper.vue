<template>
  <div class="container">
    <mt-swipe :auto="0" :continuous="loop">
      <mt-swipe-item v-for="(item, index) of items" :key="index">
        <img :src="item.images.large" :class="{imgHeight: isImgExpand}">
        <mt-button @click="handleBtnClick" v-if="(index == items.length - 1) && isShowButton" :plain="true">开始体验</mt-button>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import $ from 'axios'
  import {Swipe, SwipeItem, Button} from 'mint-ui'
  export default {
    props: {
      isShowButton: {
        type: Boolean,
        required: true
      },
      imgCount: {
        type: Number,
        default: 5
      },
      isImgExpand: {
        type: Boolean,
        required: true
      },
      loop: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        items: []
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Button.name]: Button
    },
    methods: {
      handleBtnClick() {
        this.$router.replace({
          name: 'index'
        })
      }
    },
    mounted() {
      $.get('/v2/movie/in_theaters?count=' + this.imgCount)
        .then((result) => {
          this.items = result.data.subjects
        })
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .imgHeight {
    height: 100%;
  }
  button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 20%;
    color: #fff;
  }
}
</style>
