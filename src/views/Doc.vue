<template>
  <div class="layout">
    <Topnav :toggle-aside-button-visible="true" class="nav" />
    <div class="content">
      <aside :class="{ asideVisible }">
        <h2>文档</h2>
        <ol>
          <li v-for="{ to, name } in docRouter" :key="to">
            <router-link :to="to">{{ name }}</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li v-for="{ to, name } in componentRouter" :key="to">
            <router-link :to="to">{{ name }}</router-link>
          </li>
        </ol>
      </aside>
      <main @click="toggleAside">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Topnav from '../components/Topnav.vue';

const asideVisible = inject('asideVisible');
const toggleAside = () => {
  asideVisible.value = false;
};
const docRouter = [
  { to: '/doc/intro', name: '介绍' },
  { to: '/doc/install', name: 'install' },
  { to: '/doc/get-started', name: '开始使用' },
];
const componentRouter = [
  { to: '/doc/switch', name: 'Switch 组件' },
  { to: '/doc/button', name: 'Button 组件' },
  { to: '/doc/dialog', name: 'Dialog 组件' },
  { to: '/doc/tabs', name: 'Tabs 组件' },
];
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-shrink: 0;
      background: white;
      width: 150px;
      padding: 80px 0 16px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1;
      transition: all 250ms;
      @media (max-width: 500px) {
        transform: translateX(-200px);
        background: rgb(249, 249, 249);
        box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.14);
        &.asideVisible {
          transform: translateX(0);
        }
      }

      > h2 {
        margin: 4px 0;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            font-weight: 400;
            color: rgba(0, 0, 0, 0.7);
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }

          &:hover {
            color: #409eff;
          }

          .router-link-active {
            color: #409eff;
          }
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
}

main {
  overflow: auto;
}
</style>
