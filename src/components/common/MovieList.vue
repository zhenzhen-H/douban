<template>
  <div class="list-container">
    <div v-if="!isShowLoading">
      <h3>{{title}}</h3>
      <div :id="`list-scroll-${scrollId}`">
        <div>
          <figure v-for="(movie) of movielist" :key="movie.id">
            <img :src="movie.images.large" width="90" height="125" />
            <figcaption>{{movie.title}}</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div v-if="isShowLoading" class="spinner">
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
  </div>
</template>
<script>
import { Spinner } from 'mint-ui';
import BScroll from 'better-scroll'
import $ from 'axios'
export default {
  name: "movielist",
  props: {
    movietype: {
      type: String,
      required: true
    }
  },
  data: () => ({
    movielist: [],
    title: '',
    scrollId: '',
    isShowLoading: true
  }),
  components: {
    [Spinner.name]: Spinner
  },
  methods: {
    genRandom() {
      return new Date().getTime() + Math.ceil(Math.random() * 1000)
    }
  },
  mounted() {
    $.get('/v2/movie/' + this.movietype)
      .then((result) => {
        this.movielist = result.data.subjects
        this.title = result.data.title
        this.isShowLoading = false
      })
      .catch(() => {
        this.isShowLoading = true
      })
  },
  updated() {

  },
  watch: {
    isShowLoading() {
      let hash = this.genRandom()
      this.scrollId = hash

      // 被动渲染页面，会触发updated钩子
      // this.$forceUpdate()
      
      // nextTick:
      // 将回调延迟到下次 DOM 更新循环之后执行。
      // 在修改数据之后立即使用它，然后等待 DOM 更新。
      // 它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
      this.$nextTick(function () {
        new BScroll('#list-scroll-' + this.scrollId, {
          scrollX: true
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/style/usage/core/reset.scss';
  #scalefont {
    font-size: 12px;
    transform: scale(0.86);
    transform-origin: left;
  }
  .list-container {
    padding: .1rem;
    background: #fff;
    margin-top: .2rem;
    height: 1.9rem;
    > div {
      h3 {
        @extend #scalefont;
      }
      > div {
        overflow: hidden;
        figcaption {
          @extend #scalefont;
        }
        figure {
          width: .9rem;
          margin: .05rem;
          figcaption {
            @include ellipsis();
          }
        }

        > div {
          @include flexbox();
          width: max-content;
        }
      }

      &.spinner {
        height: 100%;
        @include flexbox();
        @include align-items(center);
        @include justify-content(center);
      }
    }
  }
</style>
