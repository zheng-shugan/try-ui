---
title: 'Input'
---
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

## Input 输入框

通过鼠标或键盘输入字符

> Input为受控组件，它**总会显示Vue绑定值。**
>
> 通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。
>
> 不支持 `v-model` 修饰符。

### 基础用法
<em>实现输入框输入数据的双向绑定。</em><br>
<div>
    <t-input v-model="value" />
</div>

代码：

```vue
<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
    }
  },
}
</script>
<template>
  <div>
    <t-input v-model="value" />
  </div>
</template>
```

### 禁用状态
<em>实现禁用输入框，无法编辑输入框内文本。</em><br>
<div> 
    <t-input v-model="value" :disabled="true" />
</div>

代码：

```vue

<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
    }
  },
}
</script>
<template>
  <div> 
    <t-input v-model="value" :disabled="true" />
  </div>
</template>
```

### 

### 可清空
<em>点击图标，实现输入框内容清空</em><br>
<div>
    <t-input v-model="value" :clearable="true" />
</div>

代码：

```vue
<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
    }
  },
}
</script>
<template>
  <div>
    <t-input v-model="value" :clearable="true" />
  </div>
</template>
```

### 

### 密码框
<em>点击图标，对界面显示/隐藏密码</em><br>
<div>
    <t-input v-model="value" :show-password="true" />
</div>

代码：

```vue
<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
    }
  },
}
</script>
<template>
  <div>
    <t-input v-model="value" :show-password="true" />
  </div>
</template>
```

### 

### 尺寸
<em>除了默认尺寸，Tinput额外定义了三种输入框尺寸，它们分别是medium,small,mini</em><br>
<div>
    <em>size=medium</em><br>
    <t-input v-model="value" :size="medium" /><br>
    <em>size=small</em><br>
    <t-input v-model="value" :size="small" /><br>
    <em>size=mini</em><br>
    <t-input v-model="value" :size="mini" /><br>
</div>

代码：

```vue
<script lang="ts">
export default {
  data() {
    return {
      // 双向绑定数据
      value: '',
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
    <em>size=medium</em><br>
    <t-input v-model="value" :size="medium" /><br>
    <em>size=small</em><br>
    <t-input v-model="value" :size="small" /><br>
    <em>size=mini</em><br>
    <t-input v-model="value" :size="mini" /><br>
  <div>
</template>
```

### v-bind绑定
<em>继承原生v-bind单向绑定。</em><br>
<div>
    <t-input :value="bindValue" />
</div>

代码：

```vue
<script lang="ts">
export default {
  data() {
    return {
      // 单向绑定数据
      bindValue: '啊哈我被单向绑定啦！',
    }
  },
}
</script>
<template>
  <div>
    <t-input :value="bindValue" />
  </div>
</template>
```