<script lang='ts' setup>
import { defineProps } from 'vue'

interface ResultProps {
  title: string
  subTitle: string
}

const props = defineProps<ResultProps>()
</script>

<template>
  <div>
    <div v-if="title || $slots.title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div v-if="subTitle || $slots.subTitle">
      <slot name="sub-title">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>
