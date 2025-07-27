<script setup lang="ts">
interface Props {
  subtitle: string
  number: string
  title: string
}
const props = defineProps<Props>();
</script>

<template>
  <div class="header" :data-block-title="subtitle" :data-block-number="number">
    <div class="container">
      <p class="header__subtitle">// {{ subtitle }}</p>
      <h3 class="header__title">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-background-contrast;

  transform: translateX(-50%);
  margin-left: 50%;
  padding: 2rem;
  width: 100vw;
 
  @media (max-width: 768px) {
    padding: 1rem;
  }

  &__subtitle {
    color: $color-text-secondary;
    font-size: $text-size-sm;
  }

  &__title {
    color: $color-text-contrast;
  }
}
</style>