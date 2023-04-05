<!-- html -->
<script setup lang="ts">
import { ref } from 'vue'
const textareaVal = ref('')
</script>

<!-- js -->
<template>
  <t-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    disabled
  ></t-textarea>
</template>
