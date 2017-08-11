<template>
    <header>
        <div class="nav_ioc">
            <i @click="isshow_nav = !isshow_nav "></i>
        </div>
        <transition name="show_nav">
            <div class="cart" v-if="isshow_nav" @click="isshow_nav = !isshow_nav ">
                <ul>
                    <li>
                        <a href="/module/index.html" :class="{active_color: num == 1}"> 首页</a>
                        <i  :class="{active_color: num == 1}"></i>
                    </li>
                    <li v-for="item in cartelist">
                        <a :href="'/module/theme.html?id=' + item.id " :class="{active_color: num == item.id}"> {{item.name}}</a>
                        <i  :class="{active_color: num == item.id}"></i>
                    </li>
                </ul>
            </div>
        </transition>
        <div class="modal" v-if="isshow_nav" @click="isshow_nav = !isshow_nav "></div>
    </header>
</template>

<script>
import api from '../api/index'
export default {
    props: {
        num: {
            type: String,
            default: 1
        }
    },
    data() {
        return {
            isshow_nav: false,
            cartelist: []
        }
    },
    mounted() {
        api.cartelist().then((date) => {
            this.cartelist = date.data.others
        })
    },
}
</script>

<style lang='less'>
/* 可以设置不同的进入和离开动画 */


/* 设置持续时间和动画函数 */

.show_nav-enter-active {
    transition: all .3s ease;
}

.show_nav-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.show_nav-enter,
.show_nav-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
    transform: translateX(-10rem);
    opacity: 0;
}

header {
    width: 100%;
    font-family: "iconfont" !important;
    position: fixed;
    top: 0;
    z-index: 99;
    .nav_ioc {
        color: #fff;
        padding-top: 1rem;
        position: absolute; // z-index: 10;
        i {
            font-style: normal;
            font-size: 3rem;
            margin-left: 1rem;
        }
    }

    i:before {
        content: "\e601";
    }
}

.cart {
    font-size: 1.1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: #fff;
    z-index: 2;
    .active_color {
        color: #FFD300;
    }
    ul {
        padding: 4rem 0 0 1rem;
        width: 60%;
        height: 100%;
        background: rgba(91, 116, 146, 0.75);
        li {
            margin-top: 1rem;
            position: relative;
            margin: 1.2rem 0.5rem;
            a{
                color: #fff;
            }
            i {
                position: absolute;
                right: 1rem;
                font-style: normal;
            }
            i:before {
                content: "\e603"
            }
        }
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(91, 116, 146, 0.3);
}
</style>
