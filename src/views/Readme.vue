<script lang="ts" setup>
import { type RouteRecordName, onBeforeRouteUpdate } from 'vue-router'
import Hello from '@/components/Hello.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Avatar from '@/components/Avatar.vue'
import Card from '@/components/Card.vue'
import router from '@/router'

let currentRoute: RouteRecordName | null | undefined = router.currentRoute.value.name
onBeforeRouteUpdate((to, _from) => {
  currentRoute = to.name
})
</script>

<template>
  <Hello />
  <div class="container">
    <div class="title">
      <!-- 组件名称 -->
      <ul>
        <li>
          <router-link to="button">
            Button 按钮
          </router-link>
          <hr>
          <router-link to="input">
            Input 输入框
          </router-link>
          <hr>
          <router-link to="avatar">
            Avatar 头像组件
          </router-link>
          <hr>
          <router-link to="card">
            Card 图片组件
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 组件主体呈现区 -->
      <Button v-show="currentRoute === 'button'" />
      <Input v-show="currentRoute === 'input'" />
      <Avatar v-show="currentRoute === 'avatar'" />
      <Card v-show="currentRoute === 'card'" />
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

      a {
        color: #333;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $color-primary;
        }
      }
    }
  }

  .content {
    padding: 10px 10px;
  }
}
</style>
