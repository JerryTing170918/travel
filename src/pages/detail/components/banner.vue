<template>
    <div class="banner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_600x330_8db91d9d.jpg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">杭州极地海洋世界</div>
            <div class="banner-number"><span class="iconfont">&#xe629;</span>26</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'detailBanner',
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