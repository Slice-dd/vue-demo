import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import User from '@/components/User'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
          {
              path: '/test',
              component: Test,
              name: 'Test',
              children: [
                  {
                      path: '/test/:userId',
                      component: User,
                      name: 'User'
                  }
              ]
          }
      ]
    }
  ]
})
