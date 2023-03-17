<script lang="ts" setup>
import basic from './Dialog/dialog_1_basic.vue'
import test1 from './Dialog/dialog_2_test1.vue'
import test2 from './Dialog/dialog_3_test2.vue'
import drag from './Dialog/dialog_4_draggable.vue'
</script>

<template>
  <h2>Dialog 对话框</h2>
  <em>在保留当前页面状态的情况下，告知用户并承载相关操作。</em>
  <p /><p />
  <!-- 文字说明 -->
  <h3>基础用法</h3>
  <em>需要`modelValue`属性, 它接收`Boolean`, 为`true`时显示`Dialog`。</em><br>
  <basic />

  <h3>自定义内容</h3>
  <em>对话框的内容可以是anything！！比如一个表格或表单。</em><br>
  <test1 />

  <h3>自定义按键</h3>
  <em>按键区的元素自己传，当然可以diy啦~当然还可以加一些奇奇怪怪的东西。</em><br>
  <test2 />

  <h3>可拖拽</h3>
  <em>鼠标于标题处按下即可拖拽对话框, 松开停止拖拽，我总觉得它拽起来摇摇晃晃的，是不是得取整数值呀qvq</em>
  <em>`draggable`是是否进行拖拽，是可选的，默认值为"false"。当你打算draggable=true时, 可以直接简写成draggable。</em><br>
  <drag />
</template>

<style lang="scss" scoped>
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
