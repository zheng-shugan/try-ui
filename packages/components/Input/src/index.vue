<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue'

// withDefaults可以为props添加默认值等
const inputProps = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
})
const inputEmits = defineEmits<InputEmits>()
type TargetElement = HTMLInputElement | HTMLTextAreaElement

// 实现props穿透，继承原生input属性
const attrs = useAttrs()

// 组件接收的值类型
interface InputProps {
  modelValue?: string | number
  disabled?: boolean
  size?: 'mini' | 'small' | 'medium'
  clearable?: boolean
  showPassword?: boolean
}

// 组件发送事件类型
type InputEmits = (e: 'update:modelValue', value: string) => void

// 清除inputValue
const isEnter = ref(true)
const isClearAbled = ref(false)
const clearValue = () => {
  inputEmits('update:modelValue', '')
}

// 密码框显示
const ipt = ref()
Promise.resolve().then(() => {
  if (inputProps.showPassword)
    ipt.value.type = 'password'
})
const isShowEye = computed(() => {
  return inputProps.showPassword && inputProps.modelValue && !inputProps.clearable
})
const changeType = () => {
  if (ipt.value.type === 'password') {
    ipt.value.type = attrs.type || 'text'
    return
  }
  ipt.value.type = 'password'
}

// 输入值更新
const changeInputVal = (event: Event) => {
  // 清除clearable
  (event.target as HTMLInputElement).value ? (isClearAbled.value = true) : (isClearAbled.value = false)
  // 输入事件：数据双向绑定
  inputEmits('update:modelValue', (event.target as TargetElement).value)
}

// 禁用样式
const styleClass = computed(() => {
  return {
    'is-disabled': inputProps.disabled,
    [`t-input--${inputProps.size}`]: inputProps.size,
  }
})
</script>

<template>
  <div
    class="t-input"
    :class="styleClass"
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
  >
    <input
      ref="ipt"
      class="t-input__inner"
      placeholder="请输入文字"
      :value="inputProps.modelValue"
      :disabled="inputProps.disabled"
      v-bind="attrs"
      @input="changeInputVal"
    >
    <!-- 一键删除 -->
    <div
      v-if="inputProps.clearable && isClearAbled"
      class="t-input__suffix"
      @click="clearValue"
    >
      <img src="../style/error.png">
    </div>
    <!-- 是否可见 -->
    <div
      v-show="isShowEye"
      class="t-input__suffix"
      @click="changeType"
    >
      <!-- 待完善 -->
      <img src="../style/Show.png" alt="密码可见">
    </div>
    <!-- <p>value：{{ inputProps.modelValue }}</p> -->
  </div>
</template>

<style lang="scss" src="../style/style.scss">
</style>
