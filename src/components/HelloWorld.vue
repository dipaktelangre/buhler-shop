<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div>
    <h1 class="text-4xl text-blue-500">{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss">
</style>
