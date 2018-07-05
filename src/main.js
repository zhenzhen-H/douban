import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 取消浏览器上的生产环境的一个提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
