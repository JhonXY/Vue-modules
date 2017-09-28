<template>
    <div id="my-loop" class="slide-img-box">
        <div class="slide-img img-left">
            <ul :style="{'width': ulWidth,'transition-timing-function': slideChange}" 
                :class="{'tran':noLast}">
                <li v-for="(li, index) in list" :key="index" :style="{'width':listWidth+'%'}">
                    <a :href="li.href?li.href:'javascript:;'">
                        <img :src="li.src" class="loop-img">
                    </a>
                </li>
            </ul>
        </div>
        <div class="slide-option" v-if="option" :class="{'isLast':nowIndex===list.length, 'isFirst':nowIndex===-1,'ec-slide-option-top':direction==='top'}">
            <div>
                <span class="active span1" v-if="nowIndex===list.length"></span>
                <span v-for="(li,index) in list" :class="{'active':index===nowIndex}" :key="index"></span>
                <span class="active span2" v-if="nowIndex===-1"></span>
            </div>
        </div>
        <div class="slide-arrow" v-if="arrowurl&&arrowsize">
            <div :class="{'arrow-left':direction==='left','arrow-top':direction==='top'}" :style="{'width':arrowWidth+'px','height':arrowHeight+'px','background':'url('+arrowurl+') no-repeat','background-size':'100%'}"></div>
            <div :class="{'arrow-right':direction==='left','arrow-bottom':direction==='top'}" :style="{'width':arrowWidth+'px','height':arrowHeight+'px','background':'url('+arrowurl+') no-repeat','background-size':'100%'}"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: {
        list: {
            type: Array,
            default: function () {
                return [{ 
                    src: "http://blog.img.chunibyo.org/card.jpg"
                }]
            }
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'slide'
        },
        option: {
            type: Boolean,
            defult: true
        },
        time: {
            type: Number,
            default: 3000
        },
        sildetype: {
            type: String,
            default: 'ease'
        },
        arrowurl: {
            type: String,
            default: 'http://i1.buimg.com/1949/4d860a3067fab23b.jpg'
        },
        arrowsize: {
            type: String,
            default: '20,40'
        },
        direction: {
            type: String,
            default: 'left'
        }
    },
    data () {
        return {
            nowIndex: 0,
            nowIndexShow: 0,
            noLast: true,
            timer: null,
            slideChange: '',
            arrowWidth: '',
            arrowHeight: '',
            startX: 0,
            startY: 0,
            boxHeight: 0
        }
    },
    computed: {
        ulWidth: function () {
            return (this.list.length) + "00%"
        },
        listWidth: function() {
            return 100 / (this.list.length)
        }
    },
    mounted() {
        //设置各个数据初始值
        this.slideChange = this.sildetype;
        if (this.arrowsize && this.arrowurl) {
            this.arrowWidth = this.arrowsize.split(',')[0];
            this.arrowHeight = this.arrowsize.split(',')[1];
        }
    },
}
</script>

<style lang="scss" scoped>
    .slide-img-box {
        width: 100%;
        height: 100%;
        position: relative;
        touch-action: none;
        border: 1px solid black;
    }

    .slide-img {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        &.img-left {
            li {
                display: inline-block;
                font-size: 0;
            }
        }
        &.img-transparent {
            li {
                opacity: 0;
                transition: opacity 1s;
                width: 0;
                &.cur {
                    width: auto;
                }
                &.show {
                    opacity: 1;
                }
            }
        }
        ul {
            font-size: 0;
            &.tran {
                transition: all .4s;
            }
            li {
                text-align: center;
            }

            img {
                vertical-align: middle;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .slide-arrow {
        div {
            position: absolute;
            z-index: 2;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: .5;
            &:hover {
                opacity: 1;
            }
            &.arrow-left {
                left: 10px;
                right: auto;
            }
            &.arrow-right {
                right: 10px;
                left: auto;
                transform: rotate(180deg);
            }
            &.arrow-top {
                top: 10px;
                bottom: auto;
            }
            &.arrow-bottom {
                bottom: 10px;
                top: auto;
                transform: rotate(180deg);
            }
        }
    }

    .slide-option {
        position: absolute;
        font-size: 0;
        bottom: 10px;
        text-align: center;
        width: 100%;
        z-index: 5;
        &.isFirst {
            span:first-child {
                display: none;
            }
        }
        &.isLast {
            span:last-child {
                display: none;
            }
        }
        span {
            border-radius: 100%;
            border: 1px solid black;
            margin: 0 5px;
            background: #fff;
            display: inline-block;
            width: 10px;
            height: 10px;
            &.active {
                background: #09f;
            }
        }
        &.slide-option-top {
            display: table;
            width: 10px;
            height: 100%;
            top: 0;
            right: 10px;
            margin: auto;
            bottom: 0;
            span {
                margin: 5px 0;
            }
            div {
                display: table-cell;
                vertical-align: middle;
            }
        }
    }
</style>

