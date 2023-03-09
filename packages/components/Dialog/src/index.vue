<template>
  <div>
    <button @click="modelValue = true">点击此处查看弹窗</button>
    <!-- 点击↑触发对话框事件 -->
    <teleport to="body">
      <!-- 遮罩 -->
      <transition name="fade">
        <div class="mask" v-if="modelValue" @click="modelValue = true"></div>
      </transition>
      <!-- 对话框内容 -->
      <transition name="upsd">
        <div
          class="dialog"
          v-if="modelValue"
          id="dialog"
          :style="draggable ? { top: top + 'px', left: left + 'px' } : {}"
        >
          <!-- 标题 -->
          <div
            class="title"
            v-if="title"
            @mousedown="startDrag"
            @mouseup="stopDrag"
          >
            {{ title }}
          </div>
          <!-- 内容 -->
          <div class="msg">
            <slot />
          </div>
          <!-- 按键 -->
          <div class="btn-group">
            <button @click="modelValue = false">{{ cancelText }}</button>
            <button
              class="btn-confirm"
              @click="(modelValue = false), (status = true)"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    confirmText: {
      type: String,
      default: "确认",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const modelValue = ref<boolean>(false); // 弹出对话框true关闭对话框false
    const status = ref<boolean>(false); // 在初始数据中，确认true 取消false

    // 实现对话框窗口拖拽的一些参数
    const mouseX = ref<number>(0);
    const mouseY = ref<number>(0);
    const top = ref<number>(window.innerHeight / 2);
    const left = ref<number>(window.innerWidth / 2);
    const isDragging = ref<boolean>(false);
    // 拖动函数
    const startDrag = (e: MouseEvent) => {
      if (props.draggable) {
        isDragging.value = true;
        mouseX.value = e.clientX;
        mouseY.value = e.clientY;

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);
      }
    };
    // 停止拖动函数
    const stopDrag = () => {
      if (props.draggable) {
        isDragging.value = false;

        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDrag);
      }
    };
    // 拖动时更新对话框位置
    const drag = (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }

      const dx = e.clientX - mouseX.value;
      const dy = e.clientY - mouseY.value;

      left.value += dx;
      top.value += dy;

      mouseX.value = e.clientX;
      mouseY.value = e.clientY;
    };

    return {
      modelValue,
      status,
      confirmText: props.confirmText,
      cancelText: props.cancelText,
      title: props.title,
      draggable: props.draggable,
      top,
      left,
      startDrag,
      stopDrag,
    };
  },
});
</script>
  
  <style lang="scss" src="../style/index.scss"></style>