<script lang="ts" setup>
import { randomImg } from '../utils/randomImg.ts'
const data = {
  userName: ['JChaooo', 'Try-UI', '尽力局', '力'],
  shape: ['square', 'circle', 'hexagon'],
  color: '#a2d188',
  randColor: ['#f9c975', '#c4e1f6', '#fadeeb', '#f596a1', '#0c9a89'],
}
</script>

<template>
  <div>
    <br>
    <h2>头像组件</h2>
    <em>Avatar 组件可以用来代表人物或对象， 支持使用图片作为 Avatar。</em>
    <h3>基础用法</h3>
    <em>使用 src 和 shape 属性来设置图像的路径和形状</em>

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

.container {
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
