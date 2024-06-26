import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入字体图标
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false

import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL =  "http://127.0.0.1:8888/api/private/v1/"
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
