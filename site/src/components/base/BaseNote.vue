<script setup lang="ts">
interface Props {
  header: string;
}
const props = defineProps<Props>();
const headerText = `// ${props.header}`;
</script>

<template>
  <div class="base-note">
    <div class="base-note__header">{{ headerText }}</div>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.base-note {
  background: $color-white;
  border: 2px solid $color-text-main;

  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    background: $color-text-main;

    content: '';
    position: absolute;
    
    top: -2px;
    left: -2px;
    width: 30px;
    height: 30px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  &:hover {
    border-color: $color-accent;
    
    &::before {
      background: $color-accent;

      transform: rotate(180deg) scale(1.2);
    }
  }
  
  &__header {
    font-size: $text-size-sm;
    color: $color-text-main;

    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-weight: 600;
  }
}
</style>