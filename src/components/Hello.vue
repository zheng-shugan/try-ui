<script lang='ts' setup>
import { withDefaults } from 'vue'
import imgSrc from '../assets/avatar.png'

const props = withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Hello Vue',
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <t-button />
  <TAvatar :src="imgSrc" :alt="纳尼" :shape="hexagon" />
</template>

<style scoped>

</style>
