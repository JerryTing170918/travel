<template>
    <div class='header'>
        城市选择
        <router-link to='/'>
            <div class="iconfont header-back">&#xe697;</div>
        </router-link> 
    </div>
</template>
<script>
export default {
    name:'cityHeader',
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    position:relative
    overflow: hidden
    height :$headerHeight
    line-height :$headerHeight
    text-align :center
    color:#fff
    background: $bgColor;
    .header-back
        position:absolute
        top:0
        left:0
        width:.64rem
        text-align :center
        font-size :.6rem
        color:#fff
</style>

