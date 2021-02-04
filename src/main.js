// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import Axios from 'axios'

Vue.config.productionTip = false
// 全局引入element Ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = Axios;
Vue.prototype.$baseURI = process.env.API_ROOT
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
