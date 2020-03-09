import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import user from '@/components/userInfo'
import Code from '@/components/identifyingCode'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/code',
      component: Code
    },
  ]
})
