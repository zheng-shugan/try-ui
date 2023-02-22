<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TAvatar',
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
    alt: {
      type: String as PropType<string>,
      default: '',
    },
    shape: {
      type: String as PropType<'square' | 'circle' | 'hexagon'>,
      default: 'circle',
    },
  },
  computed: {
    shapeClass(): string {
      return `avatar-${this.shape}`
    },
  },
})
</script>

<template>
  <div class="avatar" :class="[shapeClass]">
    <img :src="src" :alt="alt">
  </div>
</template>

<style lang="scss" src="../style/style.scss" scoped>
</style>
