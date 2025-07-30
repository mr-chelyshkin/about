<script setup lang="ts">
interface Props {
  subtitle: string
  number: string
  title: string
}
const props = defineProps<Props>();
const subtitleText = `// ${props.subtitle}`;
</script>

<template>
  <div class="content-block-header" :data-block-title="subtitle" :data-block-number="number">
    <div class="container">
      <p class="content-block-header__subtitle">{{ subtitleText }}</p>
      <h3 class="content-block-header__title">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-block-header {
  background-color: $color-background-contrast;

  padding: 4rem 0;
  width: 100%;
 
  @media (max-width: 768px) {
    padding: 1rem;
  }

  &__subtitle {
    color: $color-text-contrast;
    font-size: $text-size-sm;
  }

  &__title {
    color: $color-text-contrast;
  }
}
</style>