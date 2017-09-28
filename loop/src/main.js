import Vue from 'vue'
import App from './App.vue'
import "./sass/index.scss"
import myLoop from './components/index'

Vue.use(myLoop)

new Vue({
  el: '#app',
  render: h => h(App)
})
