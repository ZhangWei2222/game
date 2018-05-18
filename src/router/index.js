import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'SiteHome',
          component: () => import('@/views/SiteHome')
        },
        // {
        //   path: '/register',
        //   name: 'Register',
        //   component: () => import('@/views/Register')
        // },
        // {
        //   path: '/login',
        //   name: 'Login',
        //   component: () => import('@/views/Login')
        // },
        {
          path: '/practice',
          name: 'practice',
          component: () => import('@/views/Practice')
        },
        {
          path: '/game',
          name: 'CommonGame',
          component: () => import('@/views/NormalGame')
        },
        {
          path: '/luckdraw',
          name: 'LuckDraw',
          component: () => import('@/views/LuckDraw')
        },
        {
          path: '/practice/cstimer',
          name: 'CsTimer',
          component: () => import('@/views/CsTimer')
        },
        {
          path: '/practice/clonemode',
          name: 'CloneMode',
          component: () => import('@/views/CloneMode')
        },
        {
          path: '/collect',
          name: 'Collect',
          component: () => import('@/views/CollectBadge')
        },
        {
          path: '/earncard',
          name: 'earncard',
          component: () => import('@/views/EarnCard')
        },
        {
          path: '/scrap',
          name: 'Scrap',
          component: () => import('@/views/ScrapPrize')
        },
        {
          path: '/callfriend',
          name: 'callFriend',
          component: () => import('@/views/CallFriend')
        },
        {
          path: '/myprize',
          name: 'myprize',
          component: () => import('@/views/MyPrize')
        },
        {
          path: '/thumbsup',
          name: 'thumbsup',
          component: () => import('@/views/ThumbsUp')
        },
      ]
    }
    // {
    //   path: '/formula',
    //   name: 'DisorderFormula',
    //   component: () => import('@/components/DisorderFormula')
    // },
    // {
    //   path: '/time',
    //   name: 'Time',
    //   component: () => import('@/components/Time')
    // },
    // {
    //   path: '/countdown',
    //   name: 'count',
    //   component: () => import('@/components/CountDown')
    // }
  ]
})
