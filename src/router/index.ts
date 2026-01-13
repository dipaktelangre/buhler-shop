import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProductList
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductList
    }
  ]
})

export default router