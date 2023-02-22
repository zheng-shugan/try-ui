<script lang="ts">
    import type { PropType } from 'vue'
    import { defineComponent } from 'vue'
    import { h }from 'vue'

    export default defineComponent({
        name: 'TSpace',

    })
</script>

<template>
    <div class="space">
        <slot></slot>
    </div>

</template>

<style lang="scss" scoped>
    .space{
        display: inline-flex;
        gap: 2rem 2rem;
        flex-direction: inherit;
        flex-wrap: wrap;
    }
</style>
