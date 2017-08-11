<template>
    <div>
        <load v-if="flag"></load>
        <carte v-if="!flag" :num="num"></carte>
        <swiper v-if="!flag" :swiperlist="bannerlist"></swiper>
        <homelist :newslist="newslist"></homelist>
        <loading :loadin="loadin" :getnews="getnews" :isajax="isajax"></loading>
    </div>
</template>
<script>   
import api from '../../api/index'
import common from '../../lib/common'
import load from '../../components/load'
import swiper from '../../components/swiper'
import carte from '../../components/carte'
import homelist from '../../components/home_list'
import loading from '../../components/loaderMore'
export default {
    data() {
        return {
            flag: true,
            loadin: false,
            isajax: true,
            newslist: [],
            bannerlist: [],
            coun: 1,
            num: '1'
        }
    },
    mounted() {
        this.getlist()
    },
    methods: {
        // 获取首屏新闻列表
        getlist() {
            api.new().then((data) => {
                this.bannerlist = data.data.top_stories
                this.newslist.push(data.data)
                this.loadin = true
                this.flag = false
            })
        },
        // 获取下拉加载新闻列表
        getnews() {
            this.isajax = false      //防止重复获取条件
            this.coun--
            api.newlist(this.getdeta(this.coun)).then((data) => {
                this.newslist.push(data.data)
                this.isajax = true
            })
        },
        // 获取时间
        getdeta(count) {
            let deta = new Date(),
                y = deta.getFullYear(),     
                m = deta.getMonth() + 1,   
                d = deta.getDate();
            m = m > 10 ? m : "0" + m;
            d = d >= 10 ? d : "0" + d;
            deta.setDate(deta.getDate() + count);           //获取前一日
            return y + "" + m + "" + d
        }
    },
    components: {
        load,
        carte,
        homelist,
        swiper,
        loading
    }
}
</script>
<style>
@import "../../css/common.css"
</style>
