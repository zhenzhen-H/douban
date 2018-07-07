<template>
  <div class="detail-container">
    <div
    :style="{
      'background-image': bgUrl,
      'background-size': 'cover',
      opacity: 0.1
      }"
      >
    </div>
    <div class="detail-scroll">
      <div v-if="isShowInfo">
        <section>
          <figure>
            <img :src="data.images.large" alt="">
            <figcaption>{{data.title}}</figcaption>
          </figure>
          <p>评分：{{data.rating.average}}</p>
          <p>导演：{{data.directors[0].name}}</p>
          <p>主演：<span v-for="v of data.casts" :key="v.id">{{v.name}}</span></p>
        </section>
        <section>
          <h2>摘要：</h2>
          <p>
            {{data.summary}}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import $ from 'axios'
import { Indicator } from 'mint-ui';
export default {
  data: () => ({
    bgUrl: 'url()',
    data: {},
    isShowInfo: false
  }),
  mounted() {
    Indicator.open()
    $.get('/v2/movie/subject/' + this.$route.query.id)
      .then((result) => {
        this.isShowInfo = true
        this.data = result.data
        this.bgUrl = 'url(' + result.data.images.large +')'
        this.$nextTick(() => {
          new BScroll('.detail-scroll')
        })
        Indicator.close()
      })
  }
}
</script>
<style lang="scss" scoped>
  .detail-container {
    height: 100%;
    position: relative;
    > div:first-child {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    > div:nth-child(2) {
      height: 100%;
      > div {
        padding: .4rem .2rem;
        section:first-child {
          figure {
            img {
              width: 3.35rem;
              height: 4rem;
            }
            figcaption {
              font-size: .2rem;
              color: #444;
              margin: .2rem 0;
              text-align: center;
            }
          }
          p {
            font-size: .12rem;
            color: #888;
            line-height: .2rem;
          }
        }
        section:last-child {
          h2 {
            font-size: .16rem;
            line-height: .6rem;
          }
          p {
            font-size: .12rem;
            color: #666;
            padding: .2rem;
            padding-top: 0;
          }
        }
      }
    }
  }
</style>
