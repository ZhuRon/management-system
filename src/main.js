// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import {} from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'lib-flexible/flexible'

fastclick.attach(document.body)

// Vue.use()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App></App>'
})
// 渲染app.vue