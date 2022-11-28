<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Lemon-UI</h1>
        <h2>探索无限可能</h2>
        <p class="actions">
          <a href="">GitHub</a>
          <a href="">码云</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <Icon name="Vue" />
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <Icon name="light" />
        <h3>代码易读</h3>
        <p>每个组件的代码都及其简介</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Topnav from '../components/Topnav.vue';
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$color: #07003b;
.topnavAndBanner {
  background: rgb(231, 241, 255);
  //background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (max-width: 500px) {
    padding: 0 16px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  color: $color;
  padding: 160px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    padding: 100px 0;
  }

  > .actions {
    padding: 8px 0;

    a {
      background: #7a79b7;
      margin: 0 8px;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
