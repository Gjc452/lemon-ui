<template>
  <div class="lemon-tabs">
    <div class="lemon-tabs-nav" ref="container">
      <div
        class="lemon-tabs-nav-item"
        v-for="(t, index) in titles"
        :class="{ selected: t === selected }"
        @click="select(t)"
        :key="index"
        :ref="
          el => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="lemon-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lemon-tabs-content">
      <component class="lemon-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script setup>
import Tab from './Tab.vue';

const slots = useSlots();
const props = defineProps(['selected']);
const emit = defineEmits(['update:selected']);

const selectedItem = ref(null);
const indicator = ref(null);
const container = ref(null);
onMounted(() => {
  watchEffect(
    () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    },
    { flush: 'post' }
  );
});
const defaults = slots.default();
const current = computed(() => defaults.find(tag => tag.props.title === props.selected));
const titles = defaults.map(tag => {
  return tag.props.title;
});
defaults.forEach(tag => {
  if (tag.type.name !== Tab.name) throw new Error('Tabs 子标签必须是 Tab');
});
const select = title => {
  emit('update:selected', title);
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lemon-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      height: 3px;
      background: $blue;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
