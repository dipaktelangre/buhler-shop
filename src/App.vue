<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import { productService } from './services'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  },
  setup() {
    onMounted(async () => {
      try {
        console.log('Testing product service...')
        const products = await productService.getAllProducts()
        console.log('Products loaded:', products)
        
        const sections = await productService.getProductSections()
        console.log('Product sections:', sections)
      } catch (error) {
        console.error('Error loading products:', error)
      }
    })

    return {}
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>
