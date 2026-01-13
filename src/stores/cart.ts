import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '../types/product'


export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<Product[]>([])

  // Getters
  const totalItems = computed(() => 
    items.value.length
  )

  const totalPrice = computed(() => 
    items.value.reduce((total, item) => total + item.price, 0)
  )

  // Actions
  const addToCart = (product: Product) => {
    items.value.push(product);
  }

  const removeFromCart = (productId: string) => {
    items.value = items.value.filter(item => item.id !== productId);
  }
  

  const clearCart = () => {
    items.value = []
  }

  return {
    items,    
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart,    
    clearCart
  }
})