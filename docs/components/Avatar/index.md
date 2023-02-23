---
title: 'Avatar'
---
# Avatar 头像
> Avatar 组件可以用来代表人物或对象， 支持使用图片作为 Avatar。

## 基础用法
> 使用 src 和 shape 属性来设置图像的路径和形状

<script lang="ts" setup>
import { randomImg } from '../../utils/randomImg.ts'
const data = {
  alt: 'imgLoadError',
  shape: ['square', 'circle', 'hexagon'],
}
</script>

<div>
<br>
<div class="listBox">
    <div>square</div>
    <div>circle</div>
    <div>hexagon</div>
</div>
<br>
<div class="listBox">
    <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" />
    <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" />
    <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" />
</div>
</div>

<style scoped>
.listBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>

```vue
<script lang="ts" setup>
import { randomImg } from '../../utils/randomImg.ts'
const data = {
  alt: 'imgLoadError',
  shape: ['square', 'circle', 'hexagon'],
}
</script>

<template>
<div>
    <div class="listBox">
        <div>square</div>
        <div>circle</div>
        <div>hexagon</div>
    </div>
    <br>
    <div class="listBox">
        <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" />
        <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" />
        <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" />
    </div>
</div>
</template>

<style scoped>
.listBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
```

## API
### Attributes
| 属性名         |      说明            |  类型   |  预设值  |
| ------------- | :-----------        | ----    | ----   |
| src           | 头像路径              | string |  ---    |
| alt           | 头像加载出错时的提示信息 | string |  ---    |
| shape         | 头像形状              | 字符串可选值：square、circle、hexagon |  circle  |
