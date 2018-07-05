import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/splash'
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
