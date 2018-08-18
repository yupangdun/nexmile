import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home.vue'
import Solution from '@/views/solution.vue'
import Category from '@/views/category.vue'
import CategoryItem from '@/views/categoryItem.vue'
import CategoryDetail from '@/views/categoryDetail.vue'
import About from '@/views/about.vue'
import Contact from '@/views/contact.vue'
import Case from '@/views/case.vue'
import CaseDetail from '@/views/caseDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/case-detail',
      name: 'CaseDetail',
      component: CaseDetail
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/category-item',
      name: 'CategoryItem',
      component: CategoryItem
    },
    {
      path: '/category-detail',
      name: 'CategoryDetail',
      component: CategoryDetail
    }
  ]
})
