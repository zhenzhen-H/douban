<template>
  <div class="container">
    <mt-swipe :auto="0" :continuous="loop" v-show="!isShowLoading">
      <mt-swipe-item v-for="(item, index) of items" :key="index" @click.native="handleImgClick(item.id)">
        <img :src="item.images.large" :class="{imgHeight: isImgExpand}">
        <mt-button @click="handleBtnClick" v-if="(index == items.length - 1) && isShowButton" :plain="true">开始体验</mt-button>
      </mt-swipe-item>
    </mt-swipe>
    <div v-show="isShowLoading" class="spinner">
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>
<script>
  import $ from 'axios'
  import {Swipe, SwipeItem, Button, Spinner} from 'mint-ui'
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
      },
      enableClick: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        items: [],
        isShowLoading: true
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Button.name]: Button,
      [Spinner.name]: Spinner
    },
    methods: {
      handleBtnClick() {
        this.$router.replace({
          name: 'index'
        })
      },
      handleImgClick(id) {
        if (this.enableClick) {
          this.$router.push({
            name: 'detail',
            query: {
              id
            }
          })
        }
      }
    },
    mounted() {
      $.get('/v2/movie/in_theaters?count=' + this.imgCount)
        .then((result) => {
          this.items = result.data.subjects
          this.isShowLoading = false
        })
    }
  }
</script>

<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
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
  .spinner {
    height: 100%;
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
  }
}
</style>
