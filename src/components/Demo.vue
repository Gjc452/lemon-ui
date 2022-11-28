<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-code" ref="root">
      <pre class="language-html" v-html="html" />
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../lib/button/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { onMounted, ref, computed } from 'vue';

const Prism = window.Prism;
const props = defineProps(['component']);
const root = ref(null);
const codeVisible = ref(false);
let height;
const showCode = () => {
  codeVisible.value = true;
  root.value.style.height = height + 'px';
};
const hideCode = () => {
  codeVisible.value = false;
  root.value.style.height = '0px';
};
const x = () => {
  height = root.value.getBoundingClientRect().height;
  root.value.style.height = '0px';
};
const html = computed(() => {
  return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
});
onMounted(x);
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 4px;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    border-top: 1px dashed $border-color;
    background: rgb(250, 250, 250);
    overflow: hidden;
    transition: all 300ms;

    > pre {
      padding: 8px 16px;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      overflow: auto;
    }
  }
}
</style>
