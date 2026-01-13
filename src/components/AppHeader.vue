<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="w-full px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Bühler Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <img 
              src="../assets/buhler-logo.svg" 
              alt="Bühler"
              class="h-8 w-auto hover:opacity-80 transition-opacity duration-200"
            />
          </router-link>
        </div>

        <!-- Current Date and Time -->
        <div class="hidden md:flex items-center">
          <div class="text-sm font-medium buhler-text">
            {{ currentDateTime }}
          </div>
        </div>

        <!-- Cart Details -->
        <div class="flex items-center">
          <router-link
            to="/checkout"
            class="flex items-center space-x-2 px-3 py-2 transition-colors duration-200 buhler-text hover:opacity-80"
          >
            <i class="fa-solid fa-cart-shopping" style="transform: scaleX(-1);"></i>
            <span class="text-sm font-medium">Cart ({{ cartItemCount }})</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data for current date and time
const currentDateTime = ref('')

// Placeholder for cart item count - will be connected to cart store later
const cartItemCount = ref(0)

// Update date and time
const updateDateTime = () => {
  const now = new Date()
  
  // Format as "Jan/13/26, 5:23:55 PM"
  const month = now.toLocaleDateString('en-US', { month: 'short' })
  const day = now.getDate()
  const year = now.getFullYear().toString().slice(-2)
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  
  currentDateTime.value = `${month}/${day}/${year}, ${time}`
}

// Timer for updating time
let timer: number | null = null

onMounted(() => {
  updateDateTime()
  // Update every second
  timer = window.setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>