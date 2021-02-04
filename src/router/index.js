import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import homeCenter from '../pages/homeCenter.vue'
import national from '../pages/national.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: home,
      children: [{
          path: '/',
          name: 'homeCenter',
          component: homeCenter
        },
        {
          path: '/national',
          name: 'national',
          component: national
        },
        {
          path: '/directory',
          name: 'directory',
          component: () => import('../pages/directory')
        },
        {
          path: '/matching',
          name: 'matching',
          component: () => import('../pages/matching')
        },
        {
          path: '/ningbo',
          name: 'ningbo',
          component: () => import('../pages/ningbo')
        },
        //企业名单
        {
          path: '/home/companiesList',
          name: 'companiesList',
          component: () => import('../pages/companiesList')
        },
        //企业分析
        {
          path: '/home/companiesAnalysis',
          name: 'companiesAnalysis',
          component: () => import('../pages/companiesAnalysis')
        },
        //企业画像
        {
          path: '/home/companiesPortrait',
          name: 'companiesPortrait',
          component: () => import('../pages/companiesPortrait')
        },
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: () => import('../components/HelloWorld')
        }
      ]
    },
    {
      path: '*',
      name: 'home',
      redirect: "/home" //重定向路由
    }
  ]
})
