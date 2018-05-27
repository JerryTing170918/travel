<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
    </div>   
</template>
<script>
export default {
  name: "homeIcons"
};
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .icons
        width:100%
        overflow :hidden
        height:0
        padding-bottom:50%
        .icon
            position: relative
            overflow :hidden
            float:left
            width:25%
            height:0
            padding-bottom :25%
            .icon-img
                position:absolute
                top:0
                right:0
                bottom: 0.44rem
                left:0
                box-sizing:border-box
                padding:.1rem
                .icon-img-content
                    height:100%
                    margin:0 auto
                    display :block
            .icon-desc
                    position:absolute
                    right:0
                    bottom: 0
                    left:0
                    line-height :.44rem
                    height .44rem
                    text-align :center
                    color:$darkTextColor

</style>
