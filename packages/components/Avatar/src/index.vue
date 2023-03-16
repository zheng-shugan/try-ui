<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TAvatar',
  props: {
    src: {
      type: String as PropType<string>,
      default: '',
    },
    size: {
      type: Number as PropType<Number>,
      default: 3,
    },
    shape: {
      type: String as PropType<'square' | 'circle' | 'hexagon'>,
      default: 'circle',
    },
    phFont: {
      type: String as PropType<string>,
      default: ' ',
    },
    phFontColor: {
      type: String as PropType<string>,
      default: 'white',
    },
    mode: {
      type: String as PropType<'img' | 'char'>,
      default: 'img',
    },
    charModeColors: {
      type: Array,
      default: () => ['#e36255', '#ec9a86', '#a2c5c8', '#f3c262', '#f1e0ce'],
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    shapeClass(): string {
      return `avatar-${this.shape}`
    },
    sizeStyle(): string {
      return `width:${this.size}rem;height:${this.size}rem`
    },
    showMode(): Boolean {
      return this.mode === 'char'
    },
    getColor(): string {
      const randomIndex: number = Math.floor(Math.random() * this.charModeColors.length)
      return `background-color:${this.charModeColors[randomIndex]}`
    },
    charMode(): string {
      return `${this.getColor};color:${this.phFontColor};font-size: ${this.size * 0.55}rem;`
    },
  },
})
</script>

<template>
  <div class="avatar" :class="[shapeClass]" :style="sizeStyle">
    <div v-if="loading && !showMode" style="width: 100%;height: 100%;" :style="getColor" />
    <img v-if="!showMode" :src="src" @load="loading = false" @error="loading = true">
    <div v-if="showMode" class="modeClass" :style="charMode">
      <span>{{ phFont.charAt(0) }}</span>
    </div>
  </div>
</template>

<style lang="scss" src="../style/style.scss" scoped></style>
