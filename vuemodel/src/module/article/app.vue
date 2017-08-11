<template>
    <div>
        <load v-if="flag"></load>
        <div v-if="!flag" class="footer">
            <div class="conter" v-html="cartelistdata.body"></div>
            <div class="comments_bottom">
                <a class="fanhui" href="javascript:history.go(-1);"></a>
                <p class="dianzan">
                    <span>{{dess.popularity}}</span>
                </p>
                <p class="pinglun" @click="show_comment(cartelistdata.id),isshow_comments = !isshow_comments">
                    <span>{{dess.comments}}</span>
                </p>
            </div>
            <transition name="show_comments">
                <div class="comment" v-if="isshow_comments">
                    <P class="comment_top">
                        <a class="fanhui" @click="isshow_comments = !isshow_comments"></a>
                        <span>{{dess.comments}}条短评论</span>
                    </P>
                    <div class="comment_list" v-for="item in comment">
                        <div class="comment_list_touxiang">
                            <img :src="item.avatar">
                        </div>
                        <div class="comment_list_xiangqing">
                            <p class="comment_list_name">{{item.author}}</p>
                            <p class="comment_list_conter" v-html="item.content.substr(0,30)"></p>
                            <p class="comment_list_time" v-html="gettime(item.time)"></p>
                        </div>
                        <div class="comment_list_dianzan">
                            <p></p>
                            <span>{{item.likes}}</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>   
import api from '../../api/index'
import common from '../../lib/common'
import load from '../../components/load'
export default {
    data() {
        return {
            id: common.getUrlPram('id'),   //获取url参数
            flag: true,
            isshow_comments: false,
            cartelistdata: [],
            dess: [],
            comment: []
        }
    },
    mounted() {
        this.getlist(this.id)
        this.getdes(this.id)
    },
    methods: {
        // 获取新闻内容页
        getlist(id) {
            api.getnewscontent(id).then((data) => {
                this.cartelistdata = data.data
                this.flag = false
            })
        },
        // 获取评论数、点赞
        getdes(id) {
            api.getComments(id).then((data) => {
                this.dess = data.data.DES
            })

        },
        // 获取评论列表
        show_comment(id) {
            api.getCommentsList(id).then((data) => {
                this.comment = data.data.COMMENTS.comments
            })
        },
        // 时间戳转换
        gettime(time){
            let nows = new Date(parseInt(time) * 1000),
                year = nows.getFullYear(),
                month = nows.getMonth()+1,
                data = nows.getDate(),
                hour = nows.getHours(),
                minute = nows.getMinutes(),
                second = nows.getSeconds();
                return year+'-'+month+'-'+data+'&nbsp&nbsp&nbsp&nbsp'+hour+':'+minute+':'+second
        }
    },
    components: {
        load
    }
}
</script>
<style lang='less' scoped>
@import "../../css/common.css";
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.show_comments-enter-active {
    transition: all .3s ease;
}

.show_comments-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.show_comments-enter,
.show_comments-leave-to
{
    transform: translateX(10rem);
    opacity: 0;
}

.conter {
    padding: 1rem;
    font-size: 1rem;
    padding-bottom: 10rem;
}

.comments_bottom {
    width: 100%;
    height: 4rem;
    position: fixed;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    background: #fff;
    align-items: center;
    .fanhui {
        font-family: "iconfont" !important;
        font-size: 3rem;
    }
    .dianzan {
        background: url(../../../static/dianzan.png) no-repeat center;
    }
    .pinglun {
        background: url(../../../static/comments.png) no-repeat center;
    }
    .pinglun,
    .dianzan {
        background-size: 100%;
        height: 2rem;
        width: 2rem;
        position: relative;
        span {
            font-size: 1rem;
            background: #3C8DC4;
            right: -1rem;
            position: absolute;
            color: #fff;
            padding: 0.15rem;
            top: -0.5rem;
        }
    }
    .fanhui::before {
        content: "\e602";
    }
}

.comment {
    position: fixed;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow-y: auto;
    background: #fff;
    padding-top: 3rem;
    .comment_top {
        color: #000;
        font-family: "iconfont" !important;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        background: #fff;
        border-bottom: 0.1rem solid;
        top: 0;
        span {
            margin-right: 1rem;
        }
        a::before {
            font-size: 3rem;
            content: "\e602";
        }
    }
    .comment_list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 0.1rem solid #111;
        padding: 1rem 0;
        .comment_list_touxiang {
            width: 5rem;
            border-radius: 3rem;
            img {
                border-radius: 3rem;
            }
        }
        .comment_list_xiangqing {
            width: 50%;
            .comment_list_name{
                font-size: 1.3rem;
            }
            .comment_list_conter{
                font-size: 1.1rem;
                margin: 0.3rem 0;
            }
            .comment_list_time{
                font-size: 1rem;
            }
        }
        .comment_list_dianzan {
            align-self: baseline;
            margin-top: 0.5rem;
            p {
                background: url(../../../static/dianzan.png) no-repeat center;
                background-size: 1.5rem;
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
                float: left;
            }
            span {
                line-height: 1.5rem;
            }
        }
    }
}
</style>
