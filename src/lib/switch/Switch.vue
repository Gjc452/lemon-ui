<template>
  <button class="lemon-switch" :class="{ 'lemon-checked': value }" @click="toggle">
    <span></span>
  </button>
</template>

<script setup>
const props = defineProps('value');
const emit = defineEmits('update:value');
const toggle = () => {
  emit('update:value', !props.value);
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.lemon-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }

  &.lemon-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.lemon-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
