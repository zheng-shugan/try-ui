<template>
  <h2>Dialog 对话框</h2>
  <em>在保留当前页面状态的情况下，告知用户并承载相关操作。</em>
  <p /><p />
  <!-- 文字说明 -->
  <h3>基础用法</h3>
  <em>点击该区域弹出弹框</em>
  <em>需要`modelValue`属性, 它接收`Boolean`, 为`true`时显示`Dialog`。</em><br />
  <em>`title`是对话框标题, 是可选的，默认值为空。</em><br />
  <em>`msg`是对话框文本内容, 是必选的，默认值为"文本内容"。</em><br />
  <em>`confirmText`是确认键文本内容, 是必选的，默认值为"确认"。</em><br />
  <em>`concelText`是取消键文本内容, 是可选的，默认值为"取消"。</em><br />
  <!-- 使用t-dialog -->
  <t-dialog title="俺是标题" cancelText="delete" confirmText="confirm">
    <span>俺是对话框文本内容啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</span>
  </t-dialog>
  <!-- 文字说明 -->
  <h3>自定义内容</h3>
  <em>对话框内(t-dialog标签中)可以是任何东西, 一段文字/一个表单/一个表格……可以加入其他组件嵌套使用喔！</em>
  <!-- 使用t-dialog -->
  <t-dialog title="下面有个输入框喔！">
    <span>俺是对话框文本内容</span><br /><br />
    <t-input placeholder="请输入内容" />
  </t-dialog>
  <!-- 文字说明 -->
  <h3>可拖拽</h3>
  <em>鼠标于标题处按下即可拖拽对话框(但是与此同时, 你必须有一个title区域, 也就是你必须要给title传值), 松开停止拖拽</em>
  <em>`draggable`是是否进行拖拽，是可选的，默认值为"false"。当你打算draggable=true时, 可以直接简写成draggable</em>
  <!-- 使用t-dialog -->
  <t-dialog title="点我拽一拽~" draggable>
    <span>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</span>
  </t-dialog>
</template>

<script lang="ts"></script>


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