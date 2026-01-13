<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div>
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Buhler Shop</h1>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-blue-200 transition-colors">Home</router-link>
          <router-link to="/about" class="hover:text-blue-200 transition-colors">About</router-link>
        </div>
      </div>
    </nav>
    
    <router-view />
  </div>
</template>

<style scoped>
</style>
