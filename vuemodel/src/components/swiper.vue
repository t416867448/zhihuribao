<template>
    <div class="swiper-container swipe">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in swiperlist">
                <a :href="'/module/article.html?id='+item.id">
                    <img :src="item.image">
                    <a class="swiper-title">{{item.title}}</a>
                </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import '../lib/swiper.js'
export default {
    props: {
        swiperlist: {
            type: Array,
            default: []
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,//可选选项，自动滑动
            pagination: '.swiper-pagination',
        })
    },
}
</script>

<style lang="less">
@import "../lib/swiper.min.css";
.swipe {
    height: 20rem;
    .swiper-slide .swiper-title {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 50%;
        width: 80%;
        font-size: 1.2rem;
        color: #fff;
        text-align: right;
    }
    .swiper-slide .swiper-title:before {
        content: '';
        width: 8rem;
        height: 0.2rem;
        background: yellow;
        display: block;
        position: absolute;
        right: 0;
        bottom: -0.5rem;
    }
}
</style>
