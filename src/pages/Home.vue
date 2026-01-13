<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <HelloWorld msg="Home Page - Tailwind CSS + SCSS Testing" />
      
      <div class="mt-8 text-center">
        <router-link 
          to="/about" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Go to About Page
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>