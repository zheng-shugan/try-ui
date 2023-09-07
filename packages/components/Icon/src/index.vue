<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  dot: {
    type: Boolean,
    default: false,
  },
  badage: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    defualt: '100%',
  },
})
const styleDot = computed(() => {
  return {
    'icon-dot': props.dot && !props.badage,
  }
})
const iconStyle = computed(() => {
  return {
    color: props.color,
    width: props.size,
    height: props.size,
  }
})
</script>

<template>
  <div class="icon">
    <svg class="icon-img" aria-hidden="true" :style="iconStyle">
      <use :xlink:href="`#icon-${props?.type}`" />
    </svg>
    <div v-if="dot" class="icon-info" :class="styleDot">
      {{ badage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
}
.icon-img {
  overflow: hidden;
  fill: currentColor;
}
.icon-info {
  position: absolute;
  top: .1em;
  right: .1em;
  font-size: .1em;
  transform: translate(50%, -50%);
  box-sizing: border-box;
  min-width: 16px;
  padding: .3em;
  color: #fff;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  border-radius: 25px;
  background-color: #ee0a24;
}

.icon-dot {
  width: 8px;
  min-width: 0;
  height: 8px;
  background-color: #ee0a24;
  border-radius: 100%;
}
</style>
