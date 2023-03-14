<script lang="ts" setup>
  import { computed, ref, useAttrs, useSlots } from 'vue'

  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
  })
  const inputEmits = defineEmits<InputEmits>()
  // 实现props穿透，继承原生input属性
  const attrs = useAttrs()
  // 复合输入框
  const slots = useSlots()

  type TargetElement = HTMLInputElement | HTMLTextAreaElement

  // 组件接收的值类型
  interface InputProps {
    modelValue?: string | number
    disabled?: boolean
    size?: 'mini' | 'small' | 'medium'
    clearable?: boolean
    showPassword?: boolean
    prefixIcon?: string
    suffixIcon?: string
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

  // 增加Icon组件的输入框
  // -前置
  const isShowPrefixIcon = computed(() => {
    return inputProps.prefixIcon
  })  
  // -后置
  const isShowSuffixIcon = computed(() => {
    return (inputProps.suffixIcon && !inputProps.clearable && !inputProps.showPassword)
  })


  // 传递样式
  const styleClass = computed(() => {
    return {
      // 禁用
      'is-disabled': inputProps.disabled,
      // 大小
      [`t-input--${inputProps.size}`]: inputProps.size,
      // 复合输入框-前
      ["t-input-group t-input-prepend"]: slots.prepend,
      // 复合输入框-后
      ["t-input-group t-input-append"]: slots.append
    }
  })
</script>

<template>
  <div class="t-input" :class="styleClass" @mouseenter="isEnter = true" @mouseleave="isEnter = false">
    <!-- 前置复合控件 -->
    <div class="t-input__prepend" v-if="slots.prepend">
      <slot name="prepend"></slot>
    </div>

    <!-- 输入框本框 -->
    <input
      ref="ipt"
      class="t-input__inner"
      :value="inputProps.modelValue"
      :disabled="inputProps.disabled"
      v-bind="attrs"
      @input="changeInputVal"
    >

    <!-- 删除控件，后面图标会改成Icon -->
    <div v-if="inputProps.clearable && isClearAbled" class="t-input__suffix" @click="clearValue">
      <img src="../style/error.png">
    </div>
    <!-- 展示控件，后面图标会改成Icon -->
    <div v-show="isShowEye" class="t-input__suffix" @click="changeType">
      <img src="../style/Show.png" alt="密码可见">
    </div>

    <!-- 图标控件 -->
    <div v-if="isShowPrefixIcon" class="t-input__prefix no-cursor">
      <t-icon :type="inputProps.prefixIcon" />
    </div>
    <div v-if="isShowSuffixIcon" class="t-input__suffix no-cursor">
      <t-icon :type="inputProps.suffixIcon" />
    </div>

    <!-- 后置复合控件 -->
    <div class="t-input__append" v-if="slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<style lang="scss" src="../style/style.scss"></style>
