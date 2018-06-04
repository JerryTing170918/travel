<template>
    <div>
        <div class="title">周末推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList">
                <div class="item-img-wrapper">
                    <img class="item-img" v-bind:src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "homeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
          title: "西湖",
          desc: "魅力淡水湖"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
          title: "西湖",
          desc: "魅力淡水湖"
        },
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
          title: "西湖",
          desc: "魅力淡水湖"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'; // 多字省略显示

.title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;

    .item-img {
        width: 100%;
    }
}

.item-info {
    padding: 0.1rem;

    .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    }

    .item-desc {
        line-height: 0.4rem;
        coclor: #ccc;
        ellipsis();
    }
}
</style>
