<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或者拼音">
    </div>
</template>
<script>

export default {
    name:'citySearch',
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search
    padding:.1rem
    heigth:.72rem
    background:$bgColor
    .search-input
        width:100%
        height:.62rem
        line-height :.62rem
        text-align :center
        border-radius :.06rem
</style>

