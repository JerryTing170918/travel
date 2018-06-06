<template>
    <div>
        <div class="search">
            <input v-model='keyword' class="search-input" type="text" placeholder="请输入城市名或者拼音">
        </div>
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li 
                    class="search-item border-bottom" 
                    v-for='item of list' 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到此位置
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "citySearch",
//   传参
  props: {
    cities: Object
  },
//   数据
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
//   计算属性
  computed:{
      hasNoData(){
          return !this.list.length
      }
  },
//   监听属性
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.keyword){
          this.list = []
          return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100)
    }
  },
//   函数方法
  methods:{
    handleCityClick (city){
        this.$store.commit('changeCity',city)
        this.$router.push('/')//跳转到首页
    }
  },
//   钩子
  mounted(){
    this.scroll = new Bscroll(this.$refs.search)
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search 
    padding: 0.1rem;
    heigth: 0.72rem;
    background: $bgColor;

    .search-input 
        box-sizing border-box
        width: 100%;
        height: 0.62rem;
        padding .1rem
        line-height: 0.62rem;
        text-align: center;
        border-radius: 0.06rem;
        color #666
.search-content 
    overflow: hidden;
    position: absolute;
    top: 1.66rem;
    right: 0;
    bottom: 0;
    left: 0
    z-index: 1;
    background #fff
    .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff

</style>

