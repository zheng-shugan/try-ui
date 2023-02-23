<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="title h1">Space 间距</div>
    <div class="introduce">
        <p>主要是为了方便一些个需要间距的内容</p>
    </div>
    <div>
        <p class="h2">基础用法</p>
        <p class="introduce">当利用space间距后，能够更加便捷的调整间距~更多更便捷操作后续添加！</p>
        <t-space>
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
        </t-space>
        <br />
        <p class="introduce">在前面的button的介绍中，排列间距如下👇 上方的展示是使用了Space间距的，而下面的展示则是没有使用的。</p>
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
        <br /><br />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.h1 {
    font-size: 25px;
    font-weight: 500;
}

.h2 {
    font-size: 20px;
    font-weight: 500;
}
.introduce {
    font-style: normal;
    line-height: 3em;
}

</style>
