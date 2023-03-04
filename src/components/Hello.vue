<script lang="ts" setup>
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Hello Vue1',
})
</script>

<template>
  <div />
</template>

<style scoped>
</style>
