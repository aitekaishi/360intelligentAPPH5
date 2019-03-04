import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/index'
import we from '@/components/we'
import product from '@/components/chanping'
import business from '@/components/business'
import appa from '@/components/appa'
import news from '@/components/news'
import newa from '@/components/new'
import zhanlbushu from '@/components/zhanlbushu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/we',
      name: 'we',
      component: we,
      meta: {
        title: '关于我们',
      }
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      meta: {
        title: '产品服务'
      }
    },
    {
      path: '/business',
      name: 'business',
      component: business,
      meta: {
        title: '招商合作'
      }
    },
    {
      path: '/app',
      name: 'appa',
      component: appa,
      meta: {
        title: 'APP专区'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '新闻资讯'
      }
    },
    {
      path: '/new',
      name: 'newa',
      component: newa,
      meta: {
        title: '新闻资讯'
      }
    },
    {
      path: '/tactic',
      name: 'zhanlbushu',
      component: zhanlbushu,
      meta: {
        title: '战略部署'
      }
    }
  ]
})
