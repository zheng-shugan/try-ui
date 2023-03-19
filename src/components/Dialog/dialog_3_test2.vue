<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>

<template>
  <t-button @click="showDialog">
    点击此处查看对话框
  </t-button>
  <t-dialog v-model="dialogVisible" title="你唤起了对话框">
    <template #msg>
      <span>这是对话框内容。</span>
    </template>
    <template #btn>
      <span class="grayText">自定义个啥~</span>
      <t-button @click="dialogVisible = false">
        自定义个啥~
      </t-button>
      <t-button @click="dialogVisible = false">
        自定义个啥~
      </t-button>
    </template>
  </t-dialog>
</template>

<style lang="scss" scoped>
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

.grayText {
  color: gray;
  font-size: smaller;
}
</style>
