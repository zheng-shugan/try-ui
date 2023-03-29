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
})
const styleDot = computed(() => {
  return {
    'icon-dot': props.dot && !props.badage,
  }
})
const iconColor = computed(() => {
  return {
    color: props.color,
  }
})
</script>

<template>
  <div class="icon">
    <svg class="icon-img" aria-hidden="true" :style="iconColor">
      <use :xlink:href="`#icon-${props.type}`" />
    </svg>
    <div v-if="dot" class="icon-info" :class="styleDot">
      {{ badage }}
    </div>
  </div>
</template>

<style scoped>
i {
  margin-right: 4px;
  vertical-align: middle;
}

.icon {
  display: inline-block;
  position: relative;
}
.icon-img {
  overflow: hidden;
  fill: currentColor;
  width: 4em;
  height: 4em;
}
.icon-info {
  position: absolute;
  top: 1em;
  right: 1em;
  transform: translate(50%, -50%);
  box-sizing: border-box;
  min-width: 16px;
  padding: 03px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  /* border: 1px solid #fff; */
  border-radius: 16px;
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
