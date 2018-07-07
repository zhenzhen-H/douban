<template>
  <div class="index-container">
    <div>
      <router-view />
    </div>
    <!-- <mt-tabbar v-model="selected">
      <mt-tab-item v-for="v of tabbar" @click.native="handleTabClick(v.path)" :id="v.id" :key="v.id">
        <i slot="icon" class="yo-ico" v-html="v.icon"></i>
        {{v.name}}
      </mt-tab-item>
    </mt-tabbar> -->

    <div class="mint-tabbar">
      <router-link
        v-for="v of tabbar"
        @click.native="handleTabClick(v.path)"
        :id="v.id"
        :key="v.id"
        :to="{path: v.path}"
        class="mint-tab-item"
        active-class="is-selected"
      >
        <div class="mint-tab-item-icon">
          <i class="yo-ico" v-html="v.icon"></i>
        </div>
        <div class="mint-tab-item-label">
          {{v.name}}
        </div>
      </router-link>
      <!-- <a data-v-84bc65e4="" class="mint-tab-item"><div class="mint-tab-item-icon"><i data-v-84bc65e4="" class="yo-ico"></i></div> <div class="mint-tab-item-label">
        搜索
      </div></a><a data-v-84bc65e4="" class="mint-tab-item"><div class="mint-tab-item-icon"><i data-v-84bc65e4="" class="yo-ico"></i></div> <div class="mint-tab-item-label">
        我的
      </div></a> -->
    </div>
  </div>
</template>

<script>
import {Tabbar, TabItem} from 'mint-ui'
export default {
  name: 'layout',
  data() {
    return {
      selected: 't1',
      tabbar: [
        {
          id: 't1',
          name: '榜单',
          icon: '&#xe608;',
          path: '/index/board'
        },
        {
          id: 't2',
          name: '搜索',
          icon: '&#xe65c;',
          path: '/index/search'
        },
        {
          id: 't3',
          name: '我的',
          icon: '&#xe78b;',
          path: '/index/profile'
        }
      ]
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem
  },
  methods: {
    handleTabClick(path) {
      this.$router.push({
        path
      })
    }
  },
  mounted() {

  },
  updated() {

  },
}
</script>

<style lang="scss" scoped>
  @import '@/style/usage/core/reset.scss';
  @font-face {
    font-family: 'yofont';
    src:
      url('../../assets/iconfonts/iconfont.woff') format('woff'),
      url('../../assets/iconfonts/iconfont.ttf') format('truetype');
  }
  .index-container {
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    > div:first-child {
      @include flex();
      overflow: hidden;
      width: 100%;
    }
    > div:last-child {
      position: static;
    }
    a {
      color: #666;
    }
    i {
      font-size: .22rem;
    }
  }
</style>
