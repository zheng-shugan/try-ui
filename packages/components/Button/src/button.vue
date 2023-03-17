<script lang="ts" setup>
import { withDefaults } from 'vue'
const props = withDefaults(defineProps<{
  type?: 'primary' | 'success' | 'danger' | 'info' | 'warning' | 'default'
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  size?: 'medium' | 'small' | 'mini'
}>(), {
  type: 'default',
  round: false,
  circle: false,
  loading: false,
  disabled: false,
})
const buttonClass = [
  't-button',
  `t-button--${props.type}`,
  props.size ? `t-button--${props.size}` : '',
  props.circle ? 'is-circle' : '',
  props.disabled ? 'is-disabled' : '',
  props.loading ? 'is-loading' : '',
  props.round ? 'is-round' : '',
]
</script>

<template>
  <button :class="buttonClass" :disabled="disabled" type="button">
    <span v-if=" $slots.default "><slot /></span>
  </button>
</template>
