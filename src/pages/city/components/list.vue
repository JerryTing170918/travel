<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>  
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                        v-for="item of hot" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>  
                    </div>
                </div>
            </div>
            <!-- ???不懂 -->
            <div class="area" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//代码优化vuex
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import Bscroll from "better-scroll";
export default {
  name: "cityList",
//   传递参数
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
//   代码优化vuex
  computed:{
    ...mapState({
        // 将公用数据city映射到list组件的计算属性里，映射后的名字叫做currentCity
        currentCity:'city'
    })
  },
// 函数方法
  methods:{
    handleCityClick (city){
        // this.changeCity(city)优化后
        this.$store.commit('changeCity',city)
        this.$router.push('/')//跳转到首页
    },
    ...mapMutations(['changeCity'])
  },
// 钩子
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
//   监听
  watch:{
      letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 1.65rem;
    right: 0;
    bottom: 0;
    left: 0;

    .title {
        line-height: 0.54rem;
        background: #eee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
    }

    .button-list {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;

        .button-wrapper {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>

