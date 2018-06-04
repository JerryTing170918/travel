<template>
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "homeSwiper",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        //轮播图设置
        pagination: ".swiper-pagination",
        loop: true, //首尾循环播放
        autoplay: 6000 //切换时间
      }
    }
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
>>> .swiper-pagination-bullet-active { // 必须加>>>
    background: #fff;
}

.swiper-img {
    width: 100%;
}
</style>
