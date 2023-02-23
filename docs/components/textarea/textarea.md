---
title: 'Textarea'
---

## Textarea 文本域

通过鼠标或键盘输入字符

> Textarea为受控组件，它**总会显示Vue绑定值。**
>
> 通常情况下，应当处理 `Textarea` 事件，并更新组件的绑定值（或使用`v-model`）。否则，文本域内显示的值将不会改变。
>
> 不支持 `v-model` 修饰符。

### 基础用法

<t-textarea placeholder="请输入内容" />

预览代码：

```
<!-- html -->
<template>
  <m-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    @input="textareaInpt"
  ></m-textarea>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import mTextarea from '../index.vue';
const textareaVal = ref("");
const textareaInpt = (e) => {
  console.log(e);
};
</script>
```

