<script lang="ts" setup>
import { randomImg } from '../utils/randomImg.ts'
const data = {
  alt: '纳尼？',
  shape: 'square',
}
</script>

<template>
  <div>
    <br>
    <h2>图片卡片</h2>
    <em>Card图片组件 可以控制图片显示方式，在图片加载完成前显示加载占位内容</em>
    <h3>基础用法</h3>
    <em>使用 src 属性设置图片路径；使用 width 和 height 属性控制图片宽高；使用 fillet 属性控制卡片圆角</em>
    <div class="listBox">
      <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="15" :fillet=".5" />
      <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="10" :fillet=".5" />
      <TCard :src="randomImg()" :alt="data.alt" :width="10" :height="5" :fillet=".5" />
      <TCard :src="randomImg()" :alt="data.alt" :width="5" :height="10" :fillet="2" />
    </div>
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

.listBox {
  /* 设置为弹性布局 */
  display: flex;
  /* 设置子元素的排列方向为水平 */
  flex-direction: row;
  /* 设置子元素在空间不足时换行 */
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
