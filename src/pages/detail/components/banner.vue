<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class="banner-tittle">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont">&#xe629;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <fade-animation>
        <common-gallary 
            :imgs='bannerImgs' 
            v-show='showGallary'
            @close='handleGallaryClose'
        ></common-gallary>
    </fade-animation>   
</div>
    
</template>
<script>
import commonGallary from 'common/gallary/gallary'
import fadeAnimation from 'common/fade/fadeAnimation'

export default {
    name:'detailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array,
    },
    data(){
        return{
            showGallary:false,
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
// 注册局部组件
    components:{
        commonGallary,
        fadeAnimation
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