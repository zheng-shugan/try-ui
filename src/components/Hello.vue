<script lang="ts" setup>
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Hello Vue',
})
</script>

<template>
  <div />
</template>

<style scoped>
</style>
