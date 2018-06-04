// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'// 解决移动端300ms点击事件延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播图模块
import './assets/styles/reset.css'// 初始化样式
import './assets/styles/border.css'// 解决移动端1像素边框问题
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)// 解决移动端300ms点击事件延迟问题
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
