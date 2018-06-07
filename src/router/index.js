import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path:'/city',
      name:'city',
      component:city
    },{
      path:'/detail/:id',
      name:'detail',
      component:detail
    }],
    // 切换页面时都会定位到顶部
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
