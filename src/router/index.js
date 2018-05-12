import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: ()=>import('../components/Home'),
      meta: {keepAlive: true,title:'首页'}
    },
    {
      path: '/collect',
      component: ()=>import('../components/Collect'),
      meta:{title:'购物车'}
    },
    {
      path: '/detail/:bid',
      component: ()=>import('../components/Detail'),
      name: 'detail',
      meta:{title:'详情'}
    },
    {
      path: '/add',
      component: ()=>import('../components/Add'),
      meta:{title:'添加'}
    },
    {
      path: '/list',
      component: ()=>import('../components/List'),
      meta:{title:'列表'}
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
