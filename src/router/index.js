import Vue from 'vue'
import Router from 'vue-router'
//import Store from '@/pages/Store'

Vue.use(Router)

const Store = resolve => require(['@/pages/Store'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store
    }
  ]
})
