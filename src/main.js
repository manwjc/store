// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
const baseURL = '/baseApi'
axios.defaults.baseURL = baseURL
Vue.prototype.$axios = axios

import FastClick from 'fastclick'
FastClick.attach(document.body);
	
import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
