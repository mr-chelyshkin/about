<script setup lang="ts">
import { ref, provide } from 'vue';

const currentBlockTitle = ref<string>('');
const setCurrentBlockTitle = (value: string) => {
  currentBlockTitle.value = value;
}
provide('setCurrentBlockTitle', setCurrentBlockTitle);

const currentBlockNumber = ref<string>('');
const setCurrentBlockNumber = (value: string) => {
  currentBlockNumber.value = value;
}
provide('setCurrentBlockNumber', setCurrentBlockNumber);
</script>

<template>
  <div class="layout">
    <header class="layout__header">
      <div class="container container__row_between">
        <div>
          asd
        </div>
        <div class="anchor">
          <span class="anchor__title">{{ currentBlockTitle }}</span>
          <span class="anchor__number">{{ currentBlockNumber }}</span>
        </div>
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
  }

  &__main {
    flex: 1 1 0%;
    position: relative;
  }

  &__footer {
    background: $color-background;
    padding: 1rem;
    text-align: center;
  }
}

.anchor {
  display: flex;
  gap: 0.3rem;

  &__title {
    font-weight: 600;
  }

  &__number {
    font-weight: 300;
  }
}
</style>
