<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader
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
