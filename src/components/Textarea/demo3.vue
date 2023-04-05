<!-- html -->
<template>
  <t-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    :maxlength="100"
  ></t-textarea>
</template>
  
  <!-- js -->
  <script setup>
import { ref } from "vue";
const textareaVal = ref("");
</script>