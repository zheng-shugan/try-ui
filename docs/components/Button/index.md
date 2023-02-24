---
title: 'Button'
---
<script setup>
  import { ref } from 'vue'
  import '../../../packages/theme-chalk/index.scss'
</script>

## Button 组件
> 常用的操作按钮

## 基础用法
> 基础的按钮用法。

<t-button>默认按钮</t-button>
<t-button type="primary">主要按钮</t-button>
<t-button type="success">成功按钮</t-button>
<t-button type="danger">危险按钮</t-button>
<t-button type="warning">警告按钮</t-button>
<t-button type="info">信息按钮</t-button>
<br />
<br />
<t-button round>默认按钮</t-button>
<t-button round type="primary">主要按钮</t-button>
<t-button round type="success">成功按钮</t-button>
<t-button round type="danger">危险按钮</t-button>
<t-button round type="warning">警告按钮</t-button>
<t-button round type="info">信息按钮</t-button>
<br />
<br />

```vue
<t-button>默认按钮</t-button>
<t-button type="primary">主要按钮</t-button>
<t-button type="success">成功按钮</t-button>
<t-button type="danger">危险按钮</t-button>
<t-button type="warning">警告按钮</t-button>
<t-button type="info">信息按钮</t-button>
<t-button round>默认按钮</t-button>
<t-button round type="primary">主要按钮</t-button>
<t-button round type="success">成功按钮</t-button>
<t-button round type="danger">危险按钮</t-button>
<t-button round type="warning">警告按钮</t-button>
<t-button round type="info">信息按钮</t-button>
```

### 禁用状态
> 按钮不可选中
<t-button disabled>默认按钮</t-button>
<t-button disabled type="primary">主要按钮</t-button>
<t-button disabled type="success">成功按钮</t-button>
<t-button disabled type="danger">危险按钮</t-button>
<t-button disabled type="warning">警告按钮</t-button>
<t-button disabled type="info">信息按钮</t-button>
<br />
<br />
<t-button disabled round>默认按钮</t-button>
<t-button disabled round type="primary">主要按钮</t-button>
<t-button disabled round type="success">成功按钮</t-button>
<t-button disabled round type="danger">危险按钮</t-button>
<t-button disabled round type="warning">警告按钮</t-button>
<t-button disabled round type="info">信息按钮</t-button>
<br />
<br />

```vue
<t-button disabled>默认按钮</t-button>
<t-button disabled type="primary">主要按钮</t-button>
<t-button disabled type="success">成功按钮</t-button>
<t-button disabled type="danger">危险按钮</t-button>
<t-button disabled type="warning">警告按钮</t-button>
<t-button disabled type="info">信息按钮</t-button>
<t-button disabled round>默认按钮</t-button>
<t-button disabled round type="primary">主要按钮</t-button>
<t-button disabled round type="success">成功按钮</t-button>
<t-button disabled round type="danger">危险按钮</t-button>
<t-button disabled round type="warning">警告按钮</t-button>
<t-button disabled round type="info">信息按钮</t-button>
```

## 文字按钮
> 没有边框和背景色的按钮
<t-button type="text">文字按钮</t-button>
<t-button type="text" disabled>文字按钮</t-button>
<br />

```vue
<t-button type="text">文字按钮</t-button>
<t-button type="text" disabled>文字按钮</t-button>
```

## 按钮组
> 以按钮组的方式出现，常用于多项类似操作。
<t-button-group>
  <t-button type="primary">
    上一页
  </t-button>
  <t-button type="primary">
    下一页
  </t-button>
</t-button-group>
<br />

```vue
<t-button-group>
  <t-button type="primary">
    上一页
  </t-button>
  <t-button type="primary">
    下一页
  </t-button>
</t-button-group>
```

## 不同尺寸
> Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
<t-button>
  默认按钮
</t-button>
<t-button size="medium">
  中等按钮
</t-button>
<t-button size="small">
  小型按钮
</t-button>
<t-button size="mini">
  超小按钮
</t-button>
<br />
<br />
<t-button round>
  默认按钮
</t-button>
<t-button size="medium" round>
  中等按钮
</t-button>
<t-button size="small" round>
  小型按钮
</t-button>
<t-button size="mini" round>
  超小按钮
</t-button>
<br />
<br />

```vue
<t-button round>
  默认按钮
</t-button>
<t-button size="medium" round>
  中等按钮
</t-button>
<t-button size="small" round>
  小型按钮
</t-button>
<t-button size="mini" round>
  超小按钮
</t-button>
```


## Attributes
| 属性名 | 说明 | 类型 | 预设值 |
| --- | --- | --- | --- |
| size           | 尺寸              | string |  ——    |
| type           | 类型 | string |  ——    |
| round         | 是否圆角按钮              | boolean |  false  |
| circle         | 是否为原型按钮              | boolean |  false  |
| disabled         | 是否是禁用状态              | boolean |  false  |

<style scoped>
  .vp-doc thead, .vp-doc tbody {
    width: 100%;
  }

  .vp-doc tr, .vp-doc th {
    border-top: none;
  }

  .vp-doc th, .vp-doc td {
    border-left: none;
    border-right: none;
    width: 30%;
    padding: 13px;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
</style>