import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//
import './assets/css/global.css'
//
import './assets/fonts/iconfont.css'
//
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 因需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌，在此将 Authorization 加入请求头
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)

  // 在最后必须return config
  return config
})

// 将axios挂载到VUE全局中，以便用this.$http使用
Vue.prototype.$http = axios

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
