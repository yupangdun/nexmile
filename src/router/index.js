import Vue from 'vue'
import Router from 'vue-router'
import Solution from '@/views/solution.vue'
import Category from '@/views/category.vue'
import CategoryItem from '@/views/categoryItem.vue'
import CategoryDetail from '@/views/categoryDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Solution',
      component: Solution
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
