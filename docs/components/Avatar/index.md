---
title: 'Avatar'
---
# Avatar 头像
> Avatar 组件可以用来代表人物或对象， 支持使用图片作为 Avatar。

## 基础用法
> 使用 src 和 shape 属性来设置图像的路径和形状；
> 使用size属性设置图片尺寸

<script lang="ts" setup>
import { randomImg } from '../../utils/randomImg.ts'
const data = {
  alt: 'imgLoadError',
  shape: ['square', 'circle', 'hexagon'],
}
</script>

<div>
    <div class="listBox">
      <!-- <div>square</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" :size="4" />
    </div>
    <div class="listBox">
      <!-- <div>circle</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" :size="4" />
    </div>
    <div class="listBox">
      <!-- <div>hexagon</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" :size="4" />
    </div>
</div>

<style scoped>
.listBox {
  margin: 10px;
  /* 设置为弹性布局 */
  display: flex;
  /* 设置子元素的排列方向为水平 */
  flex-direction: row;
  /* 设置子元素在空间不足时换行 */
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
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
      <!-- <div>square</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[0]" :size="4" />
    </div>
    <div class="listBox">
      <!-- <div>circle</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[1]" :size="4" />
    </div>
    <div class="listBox">
      <!-- <div>hexagon</div> -->
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" :size="2" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" />
      <TAvatar :src="`${randomImg()}`" :alt="data.alt" :shape="data.shape[2]" :size="4" />
    </div>
  </div>
</template>

<style scoped>
.listBox {
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
```

## API
### Attributes
| 属性名         |      说明            |  类型   |  预设值  |
| ------------- | :-----------        | ----    | ----   |
| src           | 头像路径              | string |  ---    |
| size           | 头像尺寸              | number |  3rem    |
| alt           | 头像加载出错时的提示信息 | string |  ---    |
| shape         | 头像形状              | 字符串可选值：square、circle、hexagon |  circle  |
