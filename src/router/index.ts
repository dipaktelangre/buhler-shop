import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import Product from '../pages/Product.vue'

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
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    }
  ]
})

export default router