import Vue from 'vue'
import Router from 'vue-router'
import users from '@/components/Users'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'users',
      component: users
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]  
})
