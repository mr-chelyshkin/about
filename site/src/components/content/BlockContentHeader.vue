<script setup lang="ts">
import { inject, onMounted } from 'vue';

const setCurrentBlockTitle = inject<(title: string) => void>('setCurrentBlockTitle');
const setCurrentBlockNumber = inject<(number: string) => void>('setCurrentBlockNumber');

onMounted(() => {
  setCurrentBlockTitle?.('EXPERTISE');
  setCurrentBlockNumber?.('02'); // или какой номер нужен
});
</script>

<template>
  <div class="header" data-block-title="EXPERTISE" data-block-number="02">
    <div class="container">
      <p class="header__content">// EXPERTISE</p>
      <h3>Core Technologies & Methodologies</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.header {
  background-color: $color-background-contrast;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  &__content {
    font-size: $text-size-sm;
    color: $color-text-secondary;
  }
}
</style>