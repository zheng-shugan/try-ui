---
title: 'Textarea'
---

## Textarea 文本域

通过鼠标或键盘输入字符

> Textarea为受控组件，它**总会显示Vue绑定值。**
>
> 通常情况下，应当处理 `Textarea` 事件，并更新组件的绑定值（或使用`v-model`）。否则，文本域内显示的值将不会改变。
>

### 基础用法

<!-- html -->
<t-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    @input="textareaInpt"
></t-textarea>

<tPreview compName="Textarea" fileName="demo1"/>

<!-- <t-preview compName="Textarea"/> -->

  <!-- js -->
<script setup lang="ts">
import { ref } from "vue";
const textareaVal = ref("");
const textareaInpt = (e) => {
console.log(e);
};
</script>
