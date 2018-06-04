<template>
    <div class="icons">
        <swiper :options="iconSwiperOption">
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
    data(){
        return{
            iconList:[{
                id:'001',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:'景点门票'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
                desc:'2'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc:'3'
            },{
                id:'004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                desc:'4'
            },{
                id:'005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc:'5'
            },{
                id:'006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'6'
            },{
                id:'007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'7'
            },{
                id:'008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'8'
            },{
                id:'009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'一日游下半区域图标也可滑'
            }],
            iconSwiperOption: {
                //轮播图设置
                pagination: "",
                loop: true, //首尾循环播放
                autoplay: 0 //切换时间
            }, 
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index) => {
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
