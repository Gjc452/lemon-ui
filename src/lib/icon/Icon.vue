<template>
  <svg class="icon">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script setup>
const props = defineProps(['name']);
</script>
