<script lang="ts" setup>
import { computed, ref } from 'vue'
// 传参类型
interface Pagination {
  pageNo: number // 当前页
  pageSize: number // 每页盛放信息数
  total: number // 总信息数
  continues?: number // 中间分页连续数（一般为奇数）
  selColor?: string // 选中后页字体颜色
  selBgColor?: string // 选中后页背景颜色
}
const props = defineProps<Pagination>()

// 把可修改的数据捞出来
const pageNo = ref(props.pageNo || 1)
const pageSize = ref(props.pageSize || 1)
const total = ref(props.total || 1)
const continues = ref(props.continues || 5)
const selColor = ref(props.selColor || 'white')
const selBgColor = ref(props.selBgColor || 'skublue')

// 设置颜色主题
document.documentElement.style.setProperty('--sel-color', selColor.value)
document.documentElement.style.setProperty('--sel-bg-color', selBgColor.value)

// 获取总页数
const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
// 获取中间分页部分起点和终点
const startAend = computed(() => {
  let start = 0
  let end = 0
  if (totalPage.value < continues.value) {
    start = 1
    end = totalPage.value
  }
  else {
    start = pageNo.value - Math.floor(continues.value / 2)
    end = pageNo.value + Math.floor(continues.value / 2)
    if (start < 1) {
      start = 1
      end = continues.value
    }
    else if (end > totalPage.value) {
      start = totalPage.value - continues.value + 1
      end = totalPage.value
    }
  }
  return { start, end }
})
// 中间分页部分
const range = computed(() => {
  const { start, end } = startAend.value
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})
// 点击事件
function getPage(newVal) {
  pageNo.value = newVal
}
</script>

<template>
  <div class="pagination">
    <button :disabled="pageNo <= 1" @click="getPage(pageNo - 1)">
      上一页
    </button>

    <button v-if="startAend.start !== 1" @click="getPage(1)">
      1
    </button>
    <button v-if="startAend.start > 2">
      ...
    </button>

    <button v-for="page in range" :key="page" :class="{ active: pageNo === page }" @click="getPage(page)">
      {{ page }}
    </button>

    <button v-if="startAend.end < totalPage - 1">
      ...
    </button>
    <button v-if="startAend.end !== totalPage" @click="getPage(totalPage)">
      {{ totalPage }}
    </button>

    <button :disabled="pageNo >= totalPage" @click="getPage(pageNo + 1)">
      下一页
    </button>

    <button style="margin-left: 30px">
      共{{ total }}条
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      color: var(--sel-color);
      background-color: var(--sel-bg-color);
    }
  }
}
</style>
