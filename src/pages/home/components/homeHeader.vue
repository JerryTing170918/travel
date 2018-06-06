<template>
    <div>
        <div class="header">
            <div class="left"><div class="iconfont backIcon">&#xe697;</div></div>
            <div class="input"><span class="iconfont">&#xe86e;</span>输入城市/景点/游玩主题</div>
            <router-link to='/city'>
                <div class="right">
                    {{this.city}}
                    <span class="iconfont arrowUp">&#xe87e;</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
//代码优化vuex
import { mapState } from 'vuex'
export default {
  name: "homeHeader",
  computed:{
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'; // 引入样式需要用@

.header {
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;

    .left {
        width: 0.64rem;
        float: left;

        .backIcon {
            text-align: center;
            font-size: 0.5rem;
        }
    }

    .input {
        flex: 1;
        height: 0.64rem;
        margin-top: 0.11rem;
        line-height: 0.64rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .right {
        min-width: 1.2rem;
        // 左padding
        margin-left: 0.2rem;
        float: right;
        text-align: center;
        color: #fff;

        .arrowUp {
            margin-left: -0.02rem;
            font-size: 14px;
        }
    }
}
</style>
