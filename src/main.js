import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from '../src/assets/js/router.js'//引入路由
import '../src/assets/css/cssreset.css'
import '../src/assets/css/common.css'
import '../node_modules/mint-ui/lib/style.css'
import '../src/assets/js/jquery-3.0.0.min.js'

import Mint from 'mint-ui'
Vue.use(Mint);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
