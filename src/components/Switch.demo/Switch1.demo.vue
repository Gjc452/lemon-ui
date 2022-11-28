<demo>
常规用法
</demo>
<template>
  <demo>常规用法</demo>
  <Switch v-model:value="bool" />
</template>

<script setup>
import Switch from '../../lib/switch/Switch.vue';

const bool = ref(false);
</script>
