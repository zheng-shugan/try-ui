---
title: 'Dialog'
---
## Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
<em>需要`modelValue`属性, 它接收`Boolean`, 为`true`时显示`Dialog`。</em><br>
<basic /><br>
<!-- 
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
<br> -->
<tPreview compName="Dialog" fileName="dialog_1_basic"/>

## 自定义内容
<em>对话框的内容可以是anything！！比如一个表格或表单。</em><br>
<test1 /><br>
<tPreview compName="Dialog" fileName="dialog_2_test1"/>

## 自定义按键
<em>按键区的元素自己传，当然可以diy啦~当然还可以加一些奇奇怪怪的东西。</em><br>
<test2 /><br>
<tPreview compName="Dialog" fileName="dialog_3_test2"/>

## 可拖拽
<em>鼠标于标题处按下即可拖拽对话框, 松开停止拖拽，我总觉得它拽起来摇摇晃晃的，是不是得取整数值呀qvq</em>
<em>`draggable`是是否进行拖拽，是可选的，默认值为"false"。当你打算draggable=true时, 可以直接简写成draggable。</em><br>
<drag /><br>
<tPreview compName="Dialog" fileName="dialog_4_draggable"/>

## Attributes

| 属性名      | 说明         | 类型    | 预设值 |
| :---------- | :----------- | :------ | :----- |
| title       | 对话框标题   | string  | ——     |
| draggable   | 是否可以拖动 | boolean | false  |

<script lang="ts" setup>
import basic from '../../../src/components/Dialog/dialog_1_basic.vue'
import test1 from '../../../src/components/Dialog/dialog_2_test1.vue'
import test2 from '../../../src/components/Dialog/dialog_3_test2.vue'
import drag from '../../../src/components/Dialog/dialog_4_draggable.vue'

import { ref } from 'vue'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>

<style scoped>
h2 {
  font-weight: 500;
  margin-top: 0px;
}
h3 {
  margin: 55px 0 10px;
  font-weight: 400;
}

em {
  font-size: 14px;
  color: #5e6d82;
  line-height: 3em;
  font-style: normal;
}
</style>
