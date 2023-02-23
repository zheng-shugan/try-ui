<!-- t-input组件功能展示 -->
<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
      // 单向绑定数据
      bindValue: '啊哈我被单向绑定啦！',
      // 输入框尺寸
      medium: 'medium', // mini/small/medium
      small: 'small', // mini/small/medium
      mini: 'mini', // mini/small/medium
    }
  },
}
</script>

<template>
  <div>
    <h2>Input 输入框</h2>
    <em>通过鼠标或键盘输入字符。</em>
    <p /><p />
    <h3>基础用法</h3>
    <em>实现输入框输入数据的双向绑定。</em><br>
    <t-input v-model="value" />
    <p>备注：这里可传入value</p>
    <p /><p />
    <h3>禁用状态</h3>
    <em>实现禁用输入框，无法编辑输入框内文本。</em><br>
    <t-input v-model="value" :disabled="true" />
    <p>备注：这里可传入disabled true时输入框被禁用</p>
    <p /><p />
    <h3>非正式-不同尺寸</h3>
    <em>除了默认尺寸，Tinput额外定义了三种输入框尺寸，它们分别是medium,small,mini</em><br>
    <em>size=medium</em><br>
    <t-input v-model="value" :size="medium" /><br>
    <em>size=small</em><br>
    <t-input v-model="value" :size="small" /><br>
    <em>size=mini</em><br>
    <t-input v-model="value" :size="mini" /><br>
    <p>备注：这里可传入size</p>
    <p /><p />
    <h3>非正式-v-bind绑定</h3>
    <em>继承原生v-bind单向绑定。</em><br>
    <t-input :value="bindValue" />
    <p>备注：这里继承Vue原生的v-bind数据绑定</p>
    <p /><p />
    <h3>可清空</h3>
    <em>点击图标，实现输入框内容清空</em><br>
    <t-input v-model="value" :clearable="true" />
    <p>备注：这里可传入clearable,true可清除</p>
    <p /><p />
    <h3>密码框</h3>
    <em>点击图标，对界面显示/隐藏密码</em><br>
    <t-input v-model="value" :show-password="true" />
    <p>备注：这里可传入show-password,true启用</p>
  </div>
</template>

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
