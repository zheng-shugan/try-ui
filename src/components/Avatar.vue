<script lang="ts" setup>
import { randomImg } from '../utils/randomImg.ts'
const data = {
  alt: '纳尼？',
  shape: ['square', 'circle', 'hexagon'],
}
</script>

<template>
  <div>
    <br>
    <h2>头像组件</h2>
    <em>Avatar 组件可以用来代表人物或对象， 支持使用图片作为 Avatar。</em>
    <h3>基础用法</h3>
    <em>使用 src 和 shape 属性来设置图像的路径和形状</em>

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
