<script lang="ts">
import '../iconfont/iconfont'
import { defineComponent,computed } from 'vue'
import { iconProps } from '../types'

export default defineComponent({
    props: iconProps,
    setup(props) {
        const iconName = computed(() => {
            return `.icon-${props.name}`
        })

        function showIt() {
            alert('你点击了我')
        }

        return {
            iconName,
            showIt
        };
    },
})
</script>

<template>
    <!-- <svg @click="showIt" class="icon"><use :xlink-href="iconName"></use></svg> -->
    <h2>Icon啊Icon，你为何显示不了？</h2>
    <i @click="showIt" :class="iconName"></i>
</template>
  
<style lang="scss" src="../iconfont/icon.scss"></style>