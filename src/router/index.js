import Vue from 'vue'
import Router from 'vue-router'
import Solution from '@/views/solution.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Solution',
      component: Solution
    }
  ]
})
