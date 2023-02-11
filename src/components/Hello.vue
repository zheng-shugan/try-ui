<script lang="ts" setup>
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{ msg: string }>(), {
  msg: 'Hello Vue',
})

const data = {
  alt: '纳尼？',
  shape: 'square',
  imgSrc: 'https://picsum.photos/200/300',
}
function randomImg() {
  const randInt = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  return `${data.imgSrc}?random=${randInt}`
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <t-button />
  <TAvatar :src="randomImg()" :alt="data.alt" :shape="data.shape" />
  <div class="listBox">
    <TCard v-for="i in 18" :key="i" :src="randomImg()" :alt="data.alt" :width="10" :height="15" :fillet=".5" />
  </div>
</template>

<style scoped>
.listBox{
  display: flex; /* 设置为弹性布局 */
  flex-direction: row; /* 设置子元素的排列方向为水平 */
  flex-wrap: wrap; /* 设置子元素在空间不足时换行 */
}
</style>
