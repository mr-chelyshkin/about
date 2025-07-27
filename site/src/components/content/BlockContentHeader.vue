<script setup lang="ts"></script>

<template>
  <div class="header">
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
    font-size: 0.9rem;
    color: $color-text-secondary;
  }
}
</style>