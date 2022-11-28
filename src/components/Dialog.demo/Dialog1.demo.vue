<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from '../../lib/dialog/Dialog.vue';
import Button from '../../lib/button/Button.vue';

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () => false;
const f2 = () => {};
</script>
