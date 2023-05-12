<script lang="ts" setup>
const data = {
  pageNo: 1,
  pageSize: 3,
  total: 91,
  continues: 5,
}
</script>

<template>
  <h2>Pagination 分页器</h2>
  <em>分页器分页器分页器分页器！！！！！！分页器！！！都给我学会手写分页器！</em><br>
  <em>用ts语法写真的有点难度，对于我这种小瘪三来说↓</em><br><br>
  <div>
    <t-pagination :page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" sel-bg-color="brown" />
  </div>
  <br>
  <em>传参:page-no="data.pageNo" :page-size="data.pageSize" :total="data.total" :continues="data.continues" sel-bg-color="brown"</em>
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
</style>
