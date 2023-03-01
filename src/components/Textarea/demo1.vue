<!-- html -->
<template>
    <t-textarea
      v-model="textareaVal"
      placeholder="请输入内容"
      @input="textareaInpt"
    ></t-textarea>
    <tPreview compName="Textarea" fileName="demo1"/>
  </template>
  
  <!-- js -->
  <script setup lang="ts">
  import { ref } from "vue";
  const textareaVal = ref("");
  const textareaInpt = (e) => {
    console.log(e);
  };
  </script>