<template>
    <div>
        <home-header :city='city'></home-header>
        <home-swiper :list='swiperList'></home-swiper>
        <home-icons :list='iconList'></home-icons>
        <home-recommend :list='recommendList'></home-recommend>
        <home-weekend :list='weekendList'></home-weekend> 
    </div>
</template>
<script>
import homeHeader from './components/homeHeader'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend,
  },
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  // 代码优化
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },  
  // mounted首次加载才会触发此钩子
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // activated首次加载和页面重新被显示时都会触发此钩子
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>
</style>
