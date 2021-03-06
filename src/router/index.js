import Vue from 'vue'
import Router from 'vue-router'
//import Store from '@/pages/Store'

Vue.use(Router)

const Store = resolve => require(['@/pages/Store'], resolve)
const ItemDetails = resolve => require(['@/pages/ItemDetails'], resolve)
const Login = resolve => require(['@/pages/Login'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/itemDetails',
      name: 'ItemDetails',
      component: ItemDetails,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    }
  ]
})
