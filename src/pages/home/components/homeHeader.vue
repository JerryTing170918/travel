<template>
    <div>
        <div class="header">
            <div class="left"><div class="iconfont backIcon">&#xe697;</div></div>
            <div class="input"><span class="iconfont">&#xe86e;</span>输入城市/景点/游玩主题</div>
            <div class="right">城市<span class="iconfont arrowUp">&#xe87e;</span></div>
        </div>
    </div>
</template>
<script>
export default {
  name:'homeHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'//引入样式需要用@
    .header
        display :flex
        line-height:.86rem
        background: $bgColor
        color:#fff
        .left
            width:.64rem
            float: left
            .backIcon
                text-align:center
                font-size:.5rem
        .input
            flex:1
            height:.64rem
            margin-top :.11rem
            line-height:.64rem
            margin-left:.2rem
            padding-left:.2rem
            background #fff
            border-radius:.1rem
            color:#ccc            
        .right
            width:1.24rem
            float: right
            text-align :center
            .arrowUp
                margin-left:-0.02em
                font-size:16px
</style>
