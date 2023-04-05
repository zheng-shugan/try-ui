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
#### Textarea 文本域基本使用。

<t-textarea
  v-model="textareaVal"
  placeholder="请输入内容"
  @input="textareaInpt"
></t-textarea>
<tPreview compName="Textarea" fileName="demo1"/>

### 禁用状态
#### 通过 _disabled_ 启用。

<t-textarea
  v-model="textareaVal"
  placeholder="请输入内容"
  disabled
></t-textarea>
<tPreview compName="Textarea" fileName="demo2"/>

### 限制长度
#### 通过 _maxlength_ 启用。
<t-textarea
  v-model="textareaVal"
  placeholder="请输入内容"
  :maxlength="100"
></t-textarea>
<tPreview compName="Textarea" fileName="demo3"/>

## 自定义 Focus 颜色

#### 通过 _focusColor_ 属性自定义 input 在获取焦点后的颜色。
<t-textarea
  v-model="textareaVal"
  placeholder="请输入内容"
  focusColor="#ec3437"
></t-textarea>
<tPreview compName="Textarea" fileName="demo4"/>

## Attributes 参数
| 参数        | 说明                  | 类型            | 可选值       | 默认值 |
| ----------- | --------------------- | --------------- | ------------ | ------ |
| v-model     | textarea文本域绑定值  | string / number | ——           | ——     |
| placeholder | 输入框占位字符        | string          | ——           | ——     |
| disabled    | 是否禁用              | boolean         | true / false | false  |
| form        | 原生属性，所属表单    | String          | ——           | ——     |
| rows        | textarea可见区域高度  | Number          | ——           | 4      |
| resize      | 是否开启拉伸          | boolean         | true / false | true   |
| cols        | textarea可见区域宽度  | Number          | ——           | 50     |
| readonly    | 原生属性，是否只读    | boolean         | true / false | false  |
| maxlength   | 文本区域的最大字符数  | Number          | ——           | ——     |
| focusColor  | 自定义Focus颜色的色值 | String          | ——           | ——     |
| customClass | 自定义组件整体类名    | String          | ——           | ——     |
## Event 事件
| 事件名 | 说明                           | 回调参数       | 
| ------ | ------------------------------ | -------------- | 
| focus  | textarea文本域在获取焦点时触发 | (event: Event) | 
| blur   | textarea文本域在失去焦点时触发 | (event: Event) | 
| input  | textarea文本域值变化时触发     | (value: string | 


<!-- js -->
<script setup lang="ts">
import { ref } from "vue";
const textareaVal = ref("");
const textareaInpt = (e) => {
console.log(e);
};

</script>
