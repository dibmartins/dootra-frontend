import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import HelloBs from '../components/HelloBs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bs',
      name: 'HelloBs',
      component: HelloBs
    }
  ]
})
