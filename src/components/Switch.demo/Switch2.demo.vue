<demo>
disabled 展示
</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script setup>
import Switch from '../../lib/switch/Switch.vue';

const bool = ref(false);
</script>
