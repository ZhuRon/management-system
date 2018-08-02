import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import Home from '@/pages/Home'
import ThreeMetting from '@/pages/ThreeMetting'
import MessageCard from '@/pages/MessageCard'
import Examination from '@/pages/Examination'
const login = () => import('@/pages/login')
// 因为登入界面不常用所以用lazyload

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/TM',
          name: 'ThreeMetting',
          component: ThreeMetting
        },
        {
          path: '/MC',
          name: 'MessageCard',
          component: MessageCard
        },
        {
          path: '/EM',
          name: 'Examination',
          component: Examination
        },
        {
          path: '/login',
          name: 'login',
          component: login
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})