<template>
  <div class="fixed bottom-4 right-4 z-50 space-y-2">
    <div
      v-for="notification in notificationStore.notifications"
      :key="notification.id"
      class="px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 min-w-80 transform transition-all duration-300"
      :class="{
        'bg-green-500 text-white': notification.type === 'success',
        'bg-red-500 text-white': notification.type === 'error',
        'bg-blue-500 text-white': notification.type === 'info'
      }"
    >
      <i 
        class="text-lg"
        :class="{
          'fa-solid fa-check-circle': notification.type === 'success',
          'fa-solid fa-exclamation-circle': notification.type === 'error',
          'fa-solid fa-info-circle': notification.type === 'info'
        }"
      ></i>
      <span class="flex-1">{{ notification.message }}</span>
      <button 
        @click="notificationStore.removeNotification(notification.id)"
        class="text-white hover:text-gray-200 transition-colors"
      >
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '../stores/notification'

const notificationStore = useNotificationStore()
</script>

<script lang="ts">
export default {
  name: 'NotificationContainer'
}
</script>