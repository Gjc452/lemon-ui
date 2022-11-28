import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { md } from './plugins/vite-plugin-md';
import { demo } from './plugins/vite-plugin-vue-demo';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    md(),
    vue(),
    demo,
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
    }),
  ],
});
