import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Notification {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

export const useNotificationStore = defineStore('notification', () => {
  // State
  const notifications = ref<Notification[]>([])

  // Actions
  const addNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const notification: Notification = {
      id: Date.now(),
      message,
      type
    }
    
    notifications.value.push(notification)
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      removeNotification(notification.id)
    }, 3000)
  }

  const removeNotification = (id: number) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  return {
    notifications,
    addNotification,
    removeNotification
  }
})