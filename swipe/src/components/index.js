import loop from './loop.vue'

// 注册组件
const myLoop = {
    install: function (Vue) {
        Vue.component('my-loop', loop)
    }
}

export default myLoop