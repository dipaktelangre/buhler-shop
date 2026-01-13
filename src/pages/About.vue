<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8 text-center">
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        About Page
      </h1>
      
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 max-w-md mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Test Route</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          This is a test route to demonstrate Vue Router working with Tailwind CSS.
        </p>
        
        <router-link 
          to="/" 
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>