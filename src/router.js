import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'
import Index from './views/Index.vue'

import Board from './components/board/Board.vue'
import Search from './components/search/Search.vue'
import Profile from './components/profile/Profile.vue'

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
      component: Index,
      redirect: '/index/board',
      children: [
        {
          path: 'board',
          name: 'board',
          component: Board
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
