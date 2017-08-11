<template>
    <div class="infinite-scroll" v-if="loadin" id="loadMore">
        <div class="loader">
            <svg class="loader-circular" viewBox="25 25 50 50">
                <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
        </div>
        <span class="infinite-scroll-text">正在加载。。。</span>
    </div>
</template>

<script>
export default {
    props: {
        loadin: {
            type: Boolean,
            default: false
        },
        getnews: {
            type: Function,
            default: function () { }
        },
        isajax:{
            type:Boolean,
            default:true
        }
    },
    mounted() {
        // 监听滚动条滚动
        window.onscroll = () => {
            let clientheight = document.documentElement.clientHeight,
                scroll = document.body.scrollTop,
                scrollheight = document.body.scrollHeight;
            if (this.isajax && scrollheight - (clientheight + scroll) <= 50) {
                this.getnews()
            }
        }

    }
}
</script>

<style>
.infinite-scroll {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 36px;
    width: 100%;
}

.infinite-scroll .infinite-scroll-text {
    margin-left: 16px;
    font-size: 16px;
}

.infinite-scroll .loader {
    width: 30px;
    height: 30px;
    position: relative;
}

.infinite-scroll .loader-path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
}

.infinite-scroll .loader-circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

@keyframes color {
    0%,
    100% {
        stroke: #FFD300;
    }
    40% {
        stroke: #5B7492;
    }
    66% {
        stroke: #FFD300;
    }
    80%,
    90% {
        stroke: #acb9c8;
    }
}
</style>