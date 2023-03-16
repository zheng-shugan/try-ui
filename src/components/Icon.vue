<template>
  <h2>Icon 图标</h2>
  <em>提供一点可能用到的图标，等待二凡老尸后期规范icon风格555！</em>
  <p />
  <p />
  <h3>图标集合</h3>
  <em>使用时，你只需要在t-icon标签中传入`type=xxx`。</em><br />
  <em>例如：type='loading' => 你可以获得下方图标中第一个图标。</em><br />
  <ul class="demo-icon-list">
    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="loading" /><br />
        <span class="icon-name">loading</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="psw" /><br />
        <span class="icon-name">psw</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="eye" /><br />
        <span class="icon-name">eye</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="select" /><br />
        <span class="icon-name">select</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="edit" /><br />
        <span class="icon-name">edit</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="semi-selected" /><br />
        <span class="icon-name">semi-selected</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="error" /><br />
        <span class="icon-name">error</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="qiehuan" /><br />
        <span class="icon-name">qiehuan</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="minus" /><br />
        <span class="icon-name">minus</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="user" /><br />
        <span class="icon-name">user</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="home" /><br />
        <span class="icon-name">home</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="link" /><br />
        <span class="icon-name">link</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="plus" /><br />
        <span class="icon-name">plus</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="calendar" /><br />
        <span class="icon-name">calendar</span>
      </span>
    </li>

    <li class="icon-item">
      <span class="demo-svg-icon">
        <t-icon type="menu" /><br />
        <span class="icon-name" id="iconName">menu </span>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
</script>
    
<style lang="scss" scoped>
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-radius: 1px;
  border-color: cadetblue;
  display: grid;
  place-items: center center;

  grid-template-columns: repeat(5, 1fr);

  .icon-item {
    height: 90px;
    font-size: 10px;
    transition: background-color;
    :hover {
      background-color: cadetblue;
    }
    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
      .icon-name {
        margin-top: 2px;
        text-align: center;
      }
    }
  }
}

// 展示页面样式
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