<script setup lang="ts">
const action = 'http://127.0.0.1:3500'
const accept = 'image/png, image/jepg, image/webg'
</script>

<template>
  <t-upload
    :action="action"
    :size="500"
    :accept="accept"
    :multiple="true"
    :autoupload="false"
  />
</template>
