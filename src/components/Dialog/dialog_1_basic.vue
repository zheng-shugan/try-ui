<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>

<template>
  <t-button @click="showDialog">
    点击此处查看对话框
  </t-button>
  <t-dialog v-model="dialogVisible" title="你唤起了对话框">
    <template #msg>
      <span>这是对话框内容。</span>
    </template>
    <template #btn>
      <t-button @click="dialogVisible = false">
        取消
      </t-button>
      <t-button @click="dialogVisible = false">
        确认
      </t-button>
    </template>
  </t-dialog>
</template>
