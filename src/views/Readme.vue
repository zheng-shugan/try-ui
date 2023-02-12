<script lang="ts" setup>
import Hello from '@/components/Hello.vue'
import Button from '@/components/Button.vue'
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
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 组件主体呈现区 -->
      <Button />
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
