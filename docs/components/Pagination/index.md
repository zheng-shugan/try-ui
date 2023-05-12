---
title: 'Pagination'
---
## Pagination 分页器

通过鼠标点击切换分页页面

## 基础用法
<em>传递基本参数，生成一个分页器</em><br>
<div>
    <div>
        <t-pagination :page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" />
    </div>
</div>

代码：

```vue
<script lang="ts" setup>
const data = {
  pageNo: 1,
  pageSize: 3,
  total: 91,
  continues: 5,
}
</script>

<template>
  <t-pagination :page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" />
</template>
```


## 换个风格
<em>更换分页器选中样式</em><br>
<div>
    <div>
        <t-pagination :page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" sel-bg-color="brown" />
    </div>
</div>

代码：

```vue
<script lang="ts" setup>
const data = {
  pageNo: 1,
  pageSize: 3,
  total: 91,
  continues: 5,
}
</script>

<template>
  <t-pagination :page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" sel-bg-color="brown" />
</template>
```


<script lang="ts" setup>
const data = {
  pageNo: 1,
  pageSize: 3,
  total: 91,
  continues: 5,
}
</script>
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
</style>





## Attributes

| 属性名     | 说明                       | 类型   | 预设值    |
| ---------- | -------------------------- | ------ | --------- |
| pageNo     | 当前页                     | number | 1         |
| pageSize   | 每页装载信息数量           | number | 1         |
| total      | 信息总数                   | number | 1         |
| continues  | 连续分页数量（一般为奇数） | number | 5         |
| selColor   | 选中后分页按钮字体颜色     | string | 'white'   |
| selBgColor | 选中后分页按钮背景颜色     | string | 'skyblue' |

