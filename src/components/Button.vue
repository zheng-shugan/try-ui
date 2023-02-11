<script lang="ts" setup>
</script>

<template>
  <div class="button-test">
    <h2>Button 按钮</h2>
    <em>常用的操作按钮。</em>
    <div class="basicUse">
      <h3>基础用法</h3>
      <em>基础按钮用法。</em>
      <div class="test_1">
        <t-button>
          默认按钮
        </t-button>
        <t-button type="primary">
          主要按钮
        </t-button>
        <t-button type="success">
          成功按钮
        </t-button>
        <t-button type="danger">
          危险按钮
        </t-button>
        <t-button type="warning">
          警告按钮
        </t-button>
        <t-button type="info">
          信息按钮
        </t-button>
      </div>
      <div class="test_2">
        <t-button round>
          圆角按钮
        </t-button>
        <t-button type="primary" round>
          主要按钮
        </t-button>
        <t-button type="success" round>
          成功按钮
        </t-button>
        <t-button type="danger" round>
          危险按钮
        </t-button>
        <t-button type="warning" round>
          警告按钮
        </t-button>
        <t-button type="info" round>
          信息按钮
        </t-button>
      </div>
      <div class="test_3">
        <t-button circle />
        <t-button type="primary" circle />
        <t-button type="success" circle />
        <t-button type="danger" circle />
        <t-button type="warning" circle />
        <t-button type="info" circle />
      </div>
    </div>
    <div class="not-allowed">
      <h3>禁用状态</h3>
      <em>按钮不可用状态。</em>
      <div class="test_1">
        <t-button disabled>
          默认按钮
        </t-button>
        <t-button type="primary" disabled>
          主要按钮
        </t-button>
        <t-button type="success" disabled>
          成功按钮
        </t-button>
        <t-button type="danger" disabled>
          危险按钮
        </t-button>
        <t-button type="warning" disabled>
          警告按钮
        </t-button>
        <t-button type="info" disabled>
          信息按钮
        </t-button>
      </div>
      <div class="test_2">
        <t-button round disabled>
          圆角按钮
        </t-button>
        <t-button type="primary" round disabled>
          主要按钮
        </t-button>
        <t-button type="success" round disabled>
          成功按钮
        </t-button>
        <t-button type="danger" round disabled>
          危险按钮
        </t-button>
        <t-button type="warning" round disabled>
          警告按钮
        </t-button>
        <t-button type="info" round disabled>
          信息按钮
        </t-button>
      </div>
    </div>
    <div class="textButton">
      <h3>文字按钮</h3>
      <em>没有边框和背景颜色的按钮。</em>
      <div class="test_1">
        <t-button type="text">
          文字按钮
        </t-button>
        <t-button type="text" disabled>
          文字按钮
        </t-button>
      </div>
    </div>
    <div class="buttonGroup">
      <h3>按钮组</h3>
      <em>以按钮组的方式出现，常用于多项类似操作。</em>
      <div class="test_1">
        <t-button-group>
          <t-button type="primary">
            上一页
          </t-button>
          <t-button type="primary">
            下一页
          </t-button>
        </t-button-group>
      </div>
    </div>
    <div class="loadingButton">
      <h3>加载中</h3>
      <em>点击按钮后进行数据加载操作，在按钮上显示加载状态。</em>
      <div class="test_1">
        <t-button type="primary" loading>
          加载中
        </t-button>
      </div>
    </div>
    <div class="diffSizeButton">
      <h3>不同尺寸</h3>
      <em>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</em>
      <div class="test_1">
        <t-button>
          默认按钮
        </t-button>
        <t-button size="medium">
          中等按钮
        </t-button>
        <t-button size="small">
          小型按钮
        </t-button>
        <t-button size="mini">
          超小按钮
        </t-button>
      </div>
      <div class="test_2">
        <t-button round>
          默认按钮
        </t-button>
        <t-button size="medium" round>
          中等按钮
        </t-button>
        <t-button size="small" round>
          小型按钮
        </t-button>
        <t-button size="mini" round>
          超小按钮
        </t-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-test {
  padding-bottom: 50px;
}
.test_2 {
  margin: 30px 0;
}

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
