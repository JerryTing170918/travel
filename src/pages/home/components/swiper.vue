<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
   name:'homeSwiper', 
   data () {
       return {
           swiperOption: {//轮播图设置
               pagination: '.swiper-pagination',
               loop:true,//首尾循环播放
               autoplay:6000,//切换时间
           },
           swiperList:[{//图片列表自动
               id:'001',
               imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/13/e1188b0d0f21b902.jpg_750x200_f85c782a.jpg'
           },{
               id:'002',
               imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/9e/f625886dec6c0402.jpg_750x200_417be630.jpg"
           },{
               id:'003',
               imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/1e/30472c5c05379a02.jpg_750x200_ff29557c.jpg"
           }]
       }
   }
}
</script>
<style lang="stylus" scoped>
>>> .swiper-pagination-bullet-active//必须加>>>
    background :#fff
.swiper-img
    width:100%
</style>
