<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-8 buhler-text">Our Products</h1>
    
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Loading products...</p>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <div v-else>
      <div v-for="section in sections" :key="section.title" class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 buhler-text">{{ section.title }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="product in section.products" 
            :key="product.id" 
            class="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-gray-50 cursor-pointer"
            @click="viewProduct(product.id)"
          >
            <div class="p-4">
                <img 
                    :src="product.imageUrl" 
                    :alt="product.name"
                    class="w-full h-48 object-cover"
                />
            </div>
            
            
            <div class="p-4 flex items-center justify-between bg-gray-200">
              <div>
                <h3 class="font-medium mb-1 buhler-text">{{ product.name }}</h3>
                <p class="text-lg font-bold buhler-text">
                  x{{ product.price.toFixed(2) }}
                </p>
              </div>
              
              <button 
                @click.stop="addToCart(product)"
                class="buhler-text w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                :title="`Add ${product.name} to cart`"
              >
                <i class="fa-solid fa-cart-shopping" style="transform: scaleX(-1);"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { productService } from '../services/product-service'
import { useCartStore } from '../stores/cart'
import type { ProductSection, Product } from '../types/product'

const router = useRouter()
const cartStore = useCartStore()
const sections = ref<ProductSection[]>([])
const loading = ref(true)
const error = ref('')

const addToCart = (product: Product) => {
  cartStore.addToCart(product)
  console.log('Added to cart:', product.name)
}

const viewProduct = (productId: string) => {
  router.push(`/products/${productId}`)
}

onMounted(async () => {
  try {
    sections.value = await productService.getProductSections()
  } catch (err) {
    error.value = 'Failed to load products'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<script lang="ts">
export default {
  name: 'ProductList'
}
</script>