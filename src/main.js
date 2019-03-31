import Vue from 'vue'
import 'lib-flexible/flexible'

import App from './App.vue'
import router from './router'
import store from './store'
import './mockData/mockServer'

new Vue({
  el: '#app',
  render:h => h(App),
  router,// 配置路由
  store,// 配置vuex
})
