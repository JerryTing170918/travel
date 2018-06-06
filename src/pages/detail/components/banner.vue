<template>
<div>
    <div class="banner" @click="handleBannnerClick">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_600x330_8db91d9d.jpg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">杭州极地海洋世界</div>
            <div class="banner-number"><span class="iconfont">&#xe629;</span>26</div>
        </div>
    </div>
    <common-gallary 
        :imgs='imgs' 
        v-show='showGallary'
        @close='handleGallaryClose'
    ></common-gallary>
</div>
    
</template>
<script>
import commonGallary from 'common/gallary/gallary'
export default {
    name:'detailBanner',
    data(){
        return{
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/201403/07/0a7decf6c090404c1663ab2c88d69189.jpg_350x240_d419ec68.jpg','http://img1.qunarzz.com/sight/p0/201403/07/baf02b36fbd3e3405e28e27ab9598d26.jpg_350x240_e8612035.jpg']
        }
    },
    methods:{
        handleBannnerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
    components:{
        commonGallary
    },
}
</script>
<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom  55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0 
            right 0 
            bottom 0
            line-height .6rem
            background-image: linear-gradient(top, rgba(0,0,0,0,), rgba(0,0,0,0.8))
        .banner-tittle
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
            color #fff
        .banner-number
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            color #fff
            .iconfont
                font-size: .24rem
        


</style>