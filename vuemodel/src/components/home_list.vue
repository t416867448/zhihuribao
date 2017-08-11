<template>
    <div>
        <div class="newlist" v-for="item in newslist">
            <p class="time">{{item.date.substring(0,4)+'/'+item.date.substring(4,6)+'/'+item.date.substring(6,8)}}</p>
            <a :href="'/module/article.html?id='+i.id" v-for="i in item.stories">
                <img :src="i.images">
                <p>{{i.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        newslist: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="less">
.newlist {
    width: 90%;
    margin: 0 auto;
    padding-top: 1rem;
    .time{
        font-size: 1.3rem;
        display: inline-block;
        background: #FFD300;
        border-radius: 3rem;
        padding: 0.3rem 2rem;
        color: #fff;
    }
    a {
        display: flex;
        align-items: center;
        background: #fff;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        img {
            width: 6rem;
            margin-right: .5rem
        }
        p{
            font-size: 1rem;
        }
    }
}
</style>
