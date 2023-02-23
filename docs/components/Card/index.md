---
title: 'Card'
---
# Card 图片卡
> Card图片组件 可以控制图片显示方式，在图片加载完成前显示彩色渐变的高斯模糊卡片进行占位

## 基础用法
> 使用 src 属性设置图片路径；使用 width 和 height 属性控制图片宽高；使用 fillet 属性控制卡片圆角

<script lang="ts" setup>
import { randomImg } from '../../utils/randomImg.ts'
const data = {
  alt: 'imgLoadError',
  shape: 'square',
}
</script>

<div class="listBox">
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="15" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="10" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="5" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="5" :height="10" :fillet="2" />
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
  shape: 'square',
}
</script>

<template>
<div class="listBox">
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="15" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="10" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="5" :fillet=".5" />
    <TCard :src="randomImg()" :alt="data.alt" :width="5" :height="10" :fillet="2" />
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
| src           | 图片路径              | string |  ---    |
| alt           | 图片加载出错时的提示信息 | string |  ---    |
| width         | 卡片宽               | number  |  20rem  |
| height        | 卡片高               | number  |  15rem  |
| fillet        | 卡片圆角              | number |   0rem  |


