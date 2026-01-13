<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold mb-8 buhler-text">Shopping Cart</h1>

      <!-- Empty Cart State -->
      <div v-if="cartStore.items.length === 0" class="text-center py-16">
        <i class="fa-solid fa-cart-shopping text-6xl text-gray-300 mb-4"></i>
        <h2 class="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
        <router-link 
          to="/products" 
          class="inline-block px-6 py-3 bg-buhler-brand text-white rounded-lg font-medium hover:opacity-90 transition-colors"
        >
          Continue Shopping
        </router-link>
      </div>

      <!-- Cart Items -->
      <div v-else>
        <div class="bg-white rounded-lg shadow-sm border">
          <!-- Cart Items List -->
          <div class="divide-y divide-gray-200">
            <div 
              v-for="product in cartStore.items" 
              :key="product.id"
              class="p-6 flex items-center space-x-4"
            >
              <!-- Product Image -->
              <div class="flex-shrink-0">
                <img 
                  :src="product.imageUrl" 
                  :alt="product.name"
                  class="w-20 h-20 object-cover rounded-lg"
                />
              </div>

              <!-- Product Details -->
              <div class="flex-1 min-w-0">
                <h3 class="buhler-text text-lg font-medium text-gray-900 truncate">
                  {{ product.name }}
                </h3>
                <p class="buhler-text text-sm text-gray-500 mt-1">
                  Category: {{ formatCategory(product.category) }}
                </p>                
              </div>

              <!-- Item Total -->
              <div class="text-right">
                <div class=" buhler-text text-lg font-semibold text-gray-900">
                  x{{ product.price.toFixed(2) }}
                </div>
              </div>

              <!-- Remove Button -->
              <div class="flex-shrink-0">
                <button 
                  @click="removeItem(product.id)"
                  class="buhler-text p-2 text-gray-400 hover:text-red-500 transition-colors"
                  :title="`Remove ${product.name} from cart`"
                >
                  <i class="fa-solid fa-times text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Cart Summary -->
          <div class="border-t bg-gray-50 p-6">
            <div class="flex justify-end mb-6">
              <span class="buhler-text text-xl font-bold">Total: </span>
              <span class="text-xl font-bold buhler-text px-2">
                x{{ cartStore.totalPrice.toFixed(2) }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/products" 
                class="flex-1 text-center px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </router-link>
              <button 
                class="flex-1 px-6 py-3 bg-buhler-brand text-white rounded-lg font-medium hover:opacity-90 transition-colors"
                @click="proceedToCheckout"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()

// Format category for display
const formatCategory = (category: string): string => {
  return category.replace(/([a-z])([A-Z])/g, '$1 $2')
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Remove item from cart
const removeItem = (productId: string) => {
  cartStore.removeFromCart(productId)
}

// Proceed to checkout (placeholder)
const proceedToCheckout = () => {
  alert('Checkout functionality coming soon!')
}
</script>

<script lang="ts">
export default {
  name: 'Checkout'
}
</script>

<style scoped>
.bg-buhler-brand {
  background-color: var(--buhler-brand-color);
}
</style>