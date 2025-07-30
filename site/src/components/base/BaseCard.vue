<script setup lang="ts">
interface Props {
  href?: string
}
defineProps<Props>()
</script>

<template>
  <a :href="href" class="base-card">
    <slot />
  </a>
</template>

<style scoped lang="scss">
.base-card {
  background: $color-background-main;
  border: 2px solid $color-text-main;

  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  color: inherit;
  display: block;
  padding: 1.5rem;
  height: 100%;

  &::before {
    background: $color-text-main;
    content: '';
    transition: all 0.3s ease;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: $color-text-accent;

    transform: translateY(-2px);

    &::before {
      background: $color-text-accent;

      width: 25px;
      height: 25px;
    }
  }

  &::after {
    display: none;
  }
}
</style>
