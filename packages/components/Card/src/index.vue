<script lang="ts">
import { PropType, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TCard',
  // 定义组件的属性
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 15,
    },
    fillet: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // 定义组件的状态
    const loading = ref(true)
    const error = ref(false)

    // 定义图片加载成功的处理函数
    const onLoad = () => {
      loading.value = false
      error.value = false
    }

    // 定义图片加载失败的处理函数
    const onError = () => {
      loading.value = false
      error.value = true
    }

    // 生成两个随机的色相值
    const hue1 = Math.floor(Math.random() * 360)
    const hue2 = Math.floor(Math.random() * 360)

    // 计算渐变背景的字符串
    const gradient = `linear-gradient(to right, hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%))`

    // 返回组件的状态和处理函数
    return {
      loading,
      error,
      onLoad,
      onError,
      gradient,
    }
  },
})
</script>

<template>
  <div class="t-card" :style="{ width: `${width}rem`, height: `${height}rem`, borderRadius: `${fillet}rem` }">
    <!-- 使用img标签显示图片，绑定src和alt属性，监听load和error事件 -->
    <img :src="src" :alt="alt" @load="onLoad" @error="onError">
    <!-- 如果loading为true，显示一个模糊的div -->
    <transition>
      <div v-if="loading" class="blur" :style="{ backgroundImage: gradient }" />
    </transition>
  </div>
</template>

<style lang="scss" src="../style/style.scss" scoped>
</style>
