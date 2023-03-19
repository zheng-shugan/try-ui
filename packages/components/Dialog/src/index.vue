<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TDialog',
  props: {
    // 对话框标题内容
    title: {
      type: String,
      default: 'title',
    },
    // modal层的显示与隐藏
    modelValue: Boolean,
    // 控制拖动
    draggable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const status = ref<boolean>(false)

    // 实现对话框窗口拖拽的一些参数
    const mouseX = ref<number>(0)
    const mouseY = ref<number>(0)
    const top = ref<number>(window.innerHeight / 2)
    const left = ref<number>(window.innerWidth / 2)
    const isDragging = ref<boolean>(false)

    // 拖动时更新对话框位置
    const drag = (e: MouseEvent) => {
      if (!isDragging.value)
        return

      const dx = e.clientX - mouseX.value
      const dy = e.clientY - mouseY.value

      left.value += dx
      top.value += dy

      mouseX.value = e.clientX
      mouseY.value = e.clientY
    }
    // 停止拖动函数
    const stopDrag = () => {
      if (props.draggable) {
        isDragging.value = false

        document.removeEventListener('mousemove', drag)
        document.removeEventListener('mouseup', stopDrag)
      }
    }

    // 拖动函数
    const startDrag = (e: MouseEvent) => {
      if (props.draggable) {
        isDragging.value = true
        mouseX.value = e.clientX
        mouseY.value = e.clientY

        document.addEventListener('mousemove', drag)
        document.addEventListener('mouseup', stopDrag)
      }
    }

    return {
      status,
      top,
      left,
      startDrag,
      stopDrag,
    }
  },
})
</script>

<template>
  <div>
    <!-- 点击↑触发对话框事件 -->
    <teleport to="body">
      <!-- 遮罩 -->
      <transition name="fade">
        <div v-if="modelValue" class="mask" />
      </transition>
      <!-- 对话框内容 -->
      <transition name="upsd">
        <div
          v-if="modelValue" id="dialog" class="dialog"
          :style="draggable ? { top: `${top}px`, left: `${left}px` } : {}"
        >
          <!-- 标题 -->
          <div v-if="title" class="title" @mousedown="startDrag" @mouseup="stopDrag">
            {{ title }}
          </div>
          <!-- 内容 -->
          <div class="msg">
            <slot name="msg">
              内容
            </slot>
          </div>
          <!-- 按键 -->
          <div class="btn-group">
            <slot name="btn">
              按键区
            </slot>
            <!-- <button>测试按键</button> -->
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss" src="../style/index.scss"></style>
