<template>
    <div>
        <load v-if="flag"></load>
        <carte v-if="!flag" :num="id"></carte>
        <div v-if="!flag" class="banner_con">
            <div class="banner_model"></div>
            <img :src="cartelistdata.image">
            <h3>
                <p>{{cartelistdata.description}}</p>
                <p class="desc">{{cartelistdata.name}}</p>
            </h3>
        </div>
        <div v-if="!flag" class="desclist">
            <a :href="'/module/article.html?id='+item.id" v-for="item in cartelistdata.stories">
                <img :src="item.images">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>   
import api from '../../api/index'
import common from '../../lib/common'
import load from '../../components/load'
import carte from '../../components/carte'
export default {
    data() {
        return {
            id: common.getUrlPram('id'),
            flag: true,
            cartelistdata: []
        }
    },
    mounted() {
        this.getlist()
    },
    methods: {
        // 获取当前栏目新闻列表
        getlist() {
            api.getcarteid(this.id).then((data) => {
                this.cartelistdata = data.data
                this.flag = false
            })
        }
    },
    components: {
        carte,
        load
    }
}
</script>
<style lang='less' scoped>
@import "../../css/common.css";
.banner_con {
    position: relative;
    width: 100%;
    img {
        height: 100%;
    }
    .banner_model {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    h3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 70%;
        height: 20%;
        margin: auto;
        text-align: right;
        font-size: 1.2rem;
        color: #fff;
        .desc {
            padding-top: 1rem;
            line-height: 2rem;
            color: #fff;
            position: relative;
        }
        .desc:before {
            content: '';
            width: 40%;
            height: 0.2rem;
            background: #FFD300; // border: 0.1rem solid #FFD300;
            position: absolute;
            display: block;
            right: 0;
            top: 0.3rem;
        }
    }
}

.desclist {
    width: 90%;
    margin: 0 auto;
    padding-top: 1rem;
    a {
        display: flex;
        align-items: center;
        background: #fff;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        height: 7rem;
        img {
            width: 6rem;
            margin-right: .5rem
        }
        p {
            font-size: 1rem;
        }
    }
}
</style>
