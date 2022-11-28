<template>
  <div class="topnav">
    <router-link to="/" class="logo" @click="toggleAside">
      <Icon name="wish" />
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <Icon v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside" name="menu" />
  </div>
</template>

<script setup>
const props = defineProps(['toggleAsideButtonVisible']);
const asideVisible = inject('asideVisible');
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>

<style lang="scss" scoped>
$color: #07003b;
.topnav {
  color: $color;
  display: flex;
  padding: 8px 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 0 2px rgb(0 0 0 / 25%);

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}

@media (max-width: 500px) {
  .topnav {
    z-index: 2;
    background: white;
    box-shadow: 0 0 2px rgb(0 0 0 / 25%);
  }
}
</style>
