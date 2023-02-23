<!-- html -->
<template>
    <t-textarea
      v-model="textareaVal"
      placeholder="请输入内容"
      @input="textareaInpt"
    ></t-textarea>
    <textarea-pre/>
  </template>
  
  <!-- js -->
  <script setup lang="ts">
  import { ref } from "vue";
  const textareaVal = ref("");
  const textareaInpt = (e) => {
    console.log(e);
  };
  </script>