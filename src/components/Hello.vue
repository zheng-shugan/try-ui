<script lang='ts' setup>
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Hello Vue',
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
