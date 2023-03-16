<template>
    <svg class="icon" aria-hidden="true">
        <use v-bind:xlink:href="`#icon-${props.type}`"></use>
    </svg>
</template>

<script lang="ts" setup>
    const props = defineProps({
        type: {
            type: String,
            required : true
        },
    })
</script>

<style scoped>
i {
    margin-right: 4px;
    vertical-align: middle;
}

.icon {
    width: 4em; height: 4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
</style>