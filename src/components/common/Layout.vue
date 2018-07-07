<template>
  <div class="index-container">
    <div>
      <router-view />
    </div>

    <div class="mint-tabbar">
      <router-link
        v-for="v of tabbar"
        @click.native="handleTabClick(v.path)"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
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
  components: {},
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
