<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <HelloWorld msg="Tailwind CSS + SCSS Testing" />
    </div>
  </div>
</template>

<style scoped>
/* Simple styles for testing Tailwind + SCSS */
</style>
