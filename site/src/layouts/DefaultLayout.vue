<template>
  <div class="layout">
    <header class="layout__header">
      <div class="container">
        <nav class="layout__nav">
          <router-link to="/">Главная</router-link>
          <router-link to="/tst">Тест</router-link>
        </nav>
      </div>
    </header>

    <main class="layout__main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="layout__footer">
      <div class="container">
        &copy; {{ new Date().getFullYear() }} — Все права защищены.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    background: $color-background;
    box-shadow: $shadow-header;
    color: $color-text-dark;
    height: $header-height;

    display: flex;
    flex-direction: row;
    align-items: center;

    .layout__nav {
      display: flex;
      gap: 1rem;
      a {
        color: $color-text-dark;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__main {
    flex: 1 1 0%;
    position: relative;
  }

  &__footer {
    background: #f2f2f2;
    padding: 1rem;
    text-align: center;
  }
}
</style>
