---
title: 'Dialog'
---
## Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
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

代码：

```vue
<t-dialog title="俺是标题" cancelText="delete" confirmText="confirm">
  <span>俺是对话框文本内容啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</span>
</t-dialog>
```
## 自定义内容
<em>对话框内(t-dialog标签中)可以是任何东西, 一段文字/一个表单/一个表格……可以加入其他组件嵌套使用喔！</em>
  <!-- 使用t-dialog -->
<t-dialog title="下面有个输入框喔！">
  <span>俺是对话框文本内容</span><br /><br />
  <t-input placeholder="请输入内容" />
</t-dialog>

代码：

```vue
<t-dialog title="下面有个输入框喔！">
  <span>俺是对话框文本内容</span><br /><br />
  <t-input placeholder="请输入内容" />
</t-dialog>
```
## 可拖拽
<em>鼠标于标题处按下即可拖拽对话框(但是与此同时, 你必须有一个title区域, 也就是你必须要给title传值), 松开停止拖拽</em>
<em>`draggable`是是否进行拖拽，是可选的，默认值为"false"。当你打算draggable=true时, 可以直接简写成draggable</em>
<!-- 使用t-dialog -->
<t-dialog title="点我拽一拽~" draggable>
  <span>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</span>
</t-dialog>

代码：

```vue
<t-dialog title="点我拽一拽~" draggable>
  <span>啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</span>
</t-dialog>
```

## Attributes

| 属性名      | 说明         | 类型    | 预设值 |
| :---------- | :----------- | :------ | :----- |
| title       | 对话框标题   | string  | ——     |
| cancelText  | 取消键键名   | string  | "取消" |
| confirmText | 确认键键名   | string  | "确认" |
| draggable   | 是否可以拖动 | boolean | false  |


<!-- 尝试解决对话框示例在文档里无法居中展示问题 -->
<!-- <script lang="ts">
    import { onMounted } from 'vue'
    setup() {
        onMounted(() => {window.addEventListener('resize', this.centerDialog)})
        function centerDialog() {
            const dialog = this.$refs.dialog.$el
            dialog.style.top = (window.innerHeight - dialog.offsetHeight) / 2 + 'px'
            dialog.style.left = (window.innerWidth - dialog.offsetWidth) / 2 + 'px'
        }
        function showDialog() {
            this.visible = true
            this.$nextTick(() => {
                this.centerDialog();
            })
        }

        return {
            centerDialog,
            showDialog,
        }
    } 
</script> -->
<!-- 本篇文档样式预设 -->
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
