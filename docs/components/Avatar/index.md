---
title: 'Avatar'
---
# Avatar 头像
> Avatar 是一个头像框组件，支持图片头像和文字头像。能够自定义调节头像大小、背景颜色、形状等

## 基础用法
> 展示不同大小、形状、模式（文字或图片）的头像

<script lang="ts" setup>
import { randomImg } from '../../utils/randomImg.ts'
const data = {
  userName: ['JChaooo', 'Try-UI', '尽力局', '力'],
  shape: ['square', 'circle', 'hexagon'],
  color: '#a2d188',
  randColor: ['#f9c975', '#c4e1f6', '#fadeeb', '#f596a1', '#0c9a89'],
}
</script>

<div>
  <div class="container">
    <t-avatar :src="randomImg()" />
    <t-avatar :src="randomImg()" :size="4" />
    <t-avatar :src="randomImg()" :size="5" :shape="data.shape[2]" />
    <t-avatar :src="randomImg()" :size="5" :shape="data.shape[0]" />
  </div>
  <div class="container">
    <t-avatar mode="char" :ph-font="data.userName[0]" />
    <t-avatar :size="4" mode="char" :ph-font="data.userName[1]" />
    <t-avatar :size="5" mode="char" :shape="data.shape[2]" :ph-font="data.userName[2]" :ph-font-color="data.color" />
    <t-avatar :size="5" mode="char" :shape="data.shape[0]" :char-mode-colors="data.randColor" :ph-font="data.userName[3]" />
  </div>
</div>

<style scoped>
.container {
  margin: 20px;
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
  userName: ['JChaooo', 'Try-UI', '尽力局', '力'],
  shape: ['square', 'circle', 'hexagon'],
  color: '#a2d188',
  randColor: ['#f9c975', '#c4e1f6', '#fadeeb', '#f596a1', '#0c9a89'],
}
</script>

<template>
  <div>
    <div class="container">
      <t-avatar :src="randomImg()" />
      <t-avatar :src="randomImg()" :size="4" />
      <t-avatar :src="randomImg()" :size="5" :shape="data.shape[2]" />
      <t-avatar :src="randomImg()" :size="5" :shape="data.shape[0]" />
    </div>
    <div class="container">
      <t-avatar mode="char" :ph-font="data.userName[0]" />
      <t-avatar :size="4" mode="char" :ph-font="data.userName[1]" />
      <t-avatar :size="5" mode="char" :shape="data.shape[2]" :ph-font="data.userName[2]" :ph-font-color="data.color" />
      <t-avatar :size="5" mode="char" :shape="data.shape[0]" :char-mode-colors="data.randColor" :ph-font="data.userName[3]" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
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
| 属性名         | 说明                   | 类型                                  | 预设值                                                  |
| -------------- | :--------------------- | ------------------------------------- | ------------------------------------------------------- |
| src            | 图片头像的URL          | string                                | ''                                                      |
| size           | 头像尺寸               | number                                | 3rem                                                    |
| shape          | 头像的形状             | 字符串可选值：square、circle、hexagon | circle                                                  |
| phFont         | 文字头像的中的文字     | string                                | ''                                                      |
| phFontColor    | 文字头像中文字的颜色   | string                                | white                                                   |
| mode           | 头像的模式             | 字符串可选值：img 和 char             | img                                                     |
| charModeColors | 文字头像的背景颜色数组 | 字符串数组                            | ['#e36255', '#ec9a86', '#a2c5c8', '#f3c262', '#f1e0ce'] |




