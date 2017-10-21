import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Ratings from '@/components/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
    path:'/ratings',
      name: 'ratings',
      component: Ratings
    },
     {path:'/index',
      name: 'index',
      component: Index
    }
  ]
})
