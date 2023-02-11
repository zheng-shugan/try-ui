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

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.avatar-square {
  border-radius: 4px;
}

.avatar-circle {
  border-radius: 50%;
}

.avatar-hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
