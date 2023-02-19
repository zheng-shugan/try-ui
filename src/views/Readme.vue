<script lang="ts" setup>
import Hello from '@/components/Hello.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import menuList from '@/router/index.ts'
// console.log(menuList.options.routes[0].children)
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const activeIndex = ref(0)
const router = useRouter()
const switchMenu = (item: { name: any }, index: number) => {
  activeIndex.value = index
  router.push({
    name: item.name
  })
}



</script>

<template>
<Hello />

  <div class="container">
    <div class="title">
      <!-- 组件名称 -->
      <ul>

        <li v-for="(item, index) in menuList.options.routes[0].children" :key="index"
          :class="{ active: activeIndex == index }" @click="switchMenu(item, index)">
          {{ item.name }}</li>


      </ul>
    </div>
    <div class="content">
      <!-- 组件主体呈现区 -->

      <!-- <Button /> -->
      <!-- <Textare /> -->
      <router-view></router-view>

      <!-- <Button />
      <hr>
      <Input /> -->

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/theme-chalk/common/var.scss';

.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .title {
    width: 300px;

    ul li {
      list-style: none;
      cursor: pointer;

      a {
        color: #333;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $color-primary;
        }
      }
    }

    ul li.active {
      color: blue;
    }
  }

  .content {
    padding: 10px 10px;
  }
}
</style>
