import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/views/home.vue'
import Solution from '@/views/solution.vue'
import Category from '@/views/category.vue'
import CategoryItem from '@/views/categoryItem.vue'
import CategoryDetail from '@/views/categoryDetail.vue'
import About from '@/views/about.vue'
import Contact from '@/views/contact.vue'
import Case from '@/views/case.vue'
import CaseDetail from '@/views/caseDetail.vue'
import Infomation from '@/views/infomation.vue'
import InfomationDetail from '@/views/infomationDetail.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        index: 0
      },
      component: Home
    },
    {
      path: '/solution',
      name: 'Solution',
      meta: {
        index: 1
      },
      component: Solution
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        index: 4
      },
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      meta: {
        index: 5
      },
      component: Contact
    },
    {
      path: '/infomation',
      name: 'Infomation',
      meta: {
        index: 3
      },
      component: Infomation
    },
    {
      path: '/infomation-detail',
      name: 'InfomationDetail',
      meta: {
        index: 3
      },
      component: InfomationDetail
    },

    {
      path: '/case',
      name: 'Case',
      meta: {
        index: 2
      },
      component: Case
    },
    {
      path: '/case-detail',
      name: 'CaseDetail',
      meta: {
        index: 2
      },
      component: CaseDetail
    },
    {
      path: '/category',
      name: 'Category',
      meta: {
        index: 1
      },
      component: Category
    },
    {
      path: '/category-item',
      name: 'CategoryItem',
      meta: {
        index: 1
      },
      component: CategoryItem
    },
    {
      path: '/category-detail',
      name: 'CategoryDetail',
      meta: {
        index: 1
      },
      component: CategoryDetail
    }
  ]
})
router.beforeEach((to, from, next) => {
  store.state.index = to.meta.index
  next()
})
export default router
