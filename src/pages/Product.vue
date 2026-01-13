<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="text-lg font-medium buhler-text">Loading product...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex justify-center items-center h-64">
      <div class="text-lg text-red-600">{{ error }}</div>
    </div>

    <!-- Product Details -->
    <div v-else-if="product">
      <!-- Back Button -->
      <div class="mb-6">
        <button 
          @click="goBack"
          class="flex buhler-text items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
        >
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back to Products</span>
        </button>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Left Section - Product Image -->
        <div class="flex justify-start">
          <div class="w-full max-w-lg">
            <img 
              :src="product.imageUrl" 
              :alt="product.name"
              class="w-full h-96 max-h-96 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        <!-- Right Section - Product Info -->
        <div class="flex flex-col">
          <!-- Product Information -->
          <div class="flex-1">
            <h1 class=" buhler-text text-3xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
            
            <div class="mb-6">
              <span class="text-2xl font-semibold buhler-text">x{{ product.price.toFixed(2) }}</span>
            </div>

            <div class="mb-6">
              <div class="flex items-center">
                <span class="text-sm font-medium text-gray-700 mr-2">Category:</span>
                <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {{ formatCategory(product.category) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Add to Cart Section -->
          <div class="border-t pt-6">
            <button 
              @click="addToCart"
              class="w-full py-3 px-6 rounded-lg font-medium text-white transition-colors duration-200 hover:opacity-90 bg-buhler-brand"
            >
              <i class="fa-solid fa-cart-plus mr-2"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Not Found -->
    <div v-else class="flex justify-center items-center h-64">
      <div class="text-lg text-gray-600">Product not found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productService } from '../services/product-service'
import { useCartStore } from '../stores/cart'
import type { Product } from '../types/product'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

// Component state
const product = ref<Product | null>(null)
const loading = ref(true)
const error = ref('')

// Get product ID from route params
const productId = ref(String(route.params.id))

// Format category for display
const formatCategory = (category: string): string => {
  return category.replace(/([a-z])([A-Z])/g, '$1 $2')
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Go back to products page
const goBack = () => {
  router.push('/products')
}

// Add product to cart using Pinia store
const addToCart = () => {
  if (!product.value) return
  
  cartStore.addToCart(product.value)
  console.log(`Added ${product.value.name} to cart`)
}

// Load product details
onMounted(async () => {
  try {
    loading.value = true
    product.value = await productService.getProductById(productId.value)
  } catch (err) {
    console.error('Error loading product:', err)
    error.value = 'Failed to load product details'
  } finally {
    loading.value = false
  }
})
</script>

<script lang="ts">
export default {
  name: 'Product'
}
</script>

<style scoped>
.bg-buhler-brand {
  background-color: var(--buhler-brand-color);
}
</style>