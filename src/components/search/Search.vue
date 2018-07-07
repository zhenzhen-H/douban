<template>
  <div class="page-loadmore-wrapper" ref="wrapper">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="page-loadmore-list">
        <li v-for="(item,index) in list" :key="index" class="page-loadmore-listitem">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<style lang="scss">
@import '@/style/usage/core/reset.scss';
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll;
    height: 100%;
}

</style>

<script type="text/babel">
import { Badge, Indicator, Loadmore } from 'mint-ui'
// import $ from 'axios'
export default {
  data() {
    return {
      list: [],
      allLoaded: false,
      movielist: [],
      isShowList: false
    };
  },

  components: {
    [Badge.name]: Badge,
    [Loadmore.name]: Loadmore,
    [Indicator.name]: Indicator
  },

  methods: {
    loadBottom() {
      console.log(0);
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1];
        if (lastValue < 240) {
          for (let i = 1; i <= 10; i++) {
            this.list.push(lastValue + i);
          }
        } else {
          this.allLoaded = true;
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },

    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0];
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },

    mounted() {

    }
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  }
};
</script>
