<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                
                <!--循环的不是iconList而是page-->
                <div 
                    class="icon"
                    v-for='item of page'
                    :key='item.id'
                >
                    <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>   
</template>
<script>
export default { 
    name: "homeIcons",
    props:{
        list:Array,
    },
    data() {
        return {
            swiperOption: {
                //轮播图设置
                autoplay: 0 //切换时间
            }
        }
    },
    computed:{
        pages(){
            const pages = []
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';//多字省略显示

.icons >>> .swiper-container { // 下半区域图标也可滑动
    height: 0;
    padding-bottom: 50%;
}

.icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0.44rem;
        left: 0;
        box-sizing: border-box;
        padding: 0.1rem;

        .icon-img-content {
            height: 100%;
            margin: 0 auto;
            display: block;
        }
    }

    .icon-desc {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis()
        // overflow: hidden;
        // white-space:nowrap;
        // text-overflow:ellipsis;
    }
}
</style>
