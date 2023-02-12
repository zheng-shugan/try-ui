<script lang='ts' setup>
import { computed, defineComponent, defineProps, withDefaults } from 'vue'
import { BadgeTypes } from './types'

const props = withDefaults(defineProps<badgeProps>(), {
  value: '',
  max: 99,
  isDot: false,
  hidden: false,
  type: BadgeTypes.danger,
})
export interface badgeProps {
  value: string
  max: number
  isDot: boolean
  hidden: boolean
  type: BadgeTypes
}
defineComponent({
  name: 'TBadge',
})

const isNumber = (val: any) => typeof val === 'number'

const content = computed<string>(() => {
  if (props.isDot)
    return ''

  if (isNumber(props.value) && isNumber(props.max))
    return props.value < props.max ? `${props.value}` : `${props.max}+`

  return `${props.value}`
})
</script>

<!-- <script lang="ts"> -->
<!-- export default { -->
<!--  name: 'TBadge', -->
<!-- } -->
<!-- </script> -->

<template>
  <div>
    <slot />

    <transition>
      <sup
        v-show="!props.hidden && (content || isDot)"
        v-text="content"
      />
    </transition>
  </div>
</template>

<style scoped>

</style>
