<template>
  <div class="movielist-container">
    <mt-loadmore v-show="isShowList" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div :style="wrapperHeight">
        <section v-for="v of movielist" :key="v.id">
          <div>
            <img :src="v.images.small" alt="">
          </div>
          <div @click="handleClick(v.id)">
            <h1>{{v.title}}</h1>
            <h5>{{v.original_title}}</h5>
            <h3>
              导演：
              <span v-for="d of v.directors" :key="d.id">{{d.name}}</span>
            </h3>
          </div>
          <div>
            <mt-badge type="error">10</mt-badge>
          </div>
        </section>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
import { Badge, Indicator, Loadmore } from 'mint-ui';
import $ from 'axios'
export default {
  name: "MovieList",
  data: () => ({
    movielist: [],
    allLoaded: false,
    isShowList: false,
    wrapperHeight: {
      // 由于首屏数据加载是动态的，因此需要保证在mt-loadmore组件内部要有个初始化的高度
      // 高度需要使用DOM重新计算
      'min-height': window.innerHeight + 'px'
    }
  }),
  components: {
    [Badge.name]: Badge,
    [Loadmore.name]: Loadmore
  },
  methods: {
    loadTop() {
      $.get('/v2/movie/' + this.movietype + '?start=' + this.start + '&count=2')
        .then(result => {
          this.movielist.unshift(...result.data.subjects)
          this.$refs.loadmore.onTopLoaded()
          this.start += 2
        })
    },
    loadBottom() {
      $.get('/v2/movie/' + this.movietype + '?start=' + this.start + '&count=2')
        .then(result => {
          this.movielist.push(...result.data.subjects)
          this.$refs.loadmore.onBottomLoaded()
          this.start += 2
        })
    },
    handleClick(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id
        }
      })
    }
  },
  created() {

  },
  mounted() {
    this.start = 21
    this.movietype = this.$route.query.uri
    Indicator.open()
    $.get('/v2/movie/' + this.movietype)
      .then((result) => {
        this.movielist = result.data.subjects
        Indicator.close()
        this.isShowList = true
      })
      .catch(() => {

      })
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
.movielist-container {
  height: 100%;
  overflow: scroll;
  background: #fff;
  .mint-loadmore {
    section {
      height: 1.04rem;
      padding: .1rem .2rem;
      @include flexbox();
      &:last-child {
        border: 0;
      }
      div:first-child {
        width: .7rem;
        img {
          width: .64rem;
          height: .84rem;
        }
      }
      div:nth-child(2) {
        @include flex();
        h1 {
          font-size: .18rem;
          font-weight: normal;
          @include ellipsis();
          margin-bottom: .05rem;
        }
        h5 {
          font-size: .12rem;
          color: #c0c0c0;
          font-weight: 100;
          margin-bottom: .05rem;
        }
        h3 {
          font-size: .14rem;
          color: #999;
          font-weight: 100;
          margin-bottom: .05rem;
        }
      }
      div:last-child {
        width: .35rem;
      }
      @include border(0 0 1px 0);
    }
  }
}
</style>
