<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode" @click="copyCode"><i class="m-icon-copy"></i></span>
    <transition name="slide-fade">
      <pre class="language-html" v-if="showCode"><code class="language-html">{{ sourceCode }}</code></pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <i class="m-icon-code"></i>
    </div>
    <textarea id="inputCopy" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  fileName:{
    type: String,
    default: "",
    require: true,
  }
});
const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showOrhideCode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getSourceCode() {
   sourceCode.value = (
    await import(
      `../../../../src/components/${props.compName}/${props.fileName}.vue?raw`
    )
    
  ).default;
}
onMounted(() => {
  getSourceCode();
});
</script>

<style lang="scss" src="../style/index.scss" scoped>
</style>
