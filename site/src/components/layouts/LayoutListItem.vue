<script setup lang="ts">
interface Props {
  number: string;
  title: string;
}
defineProps<Props>();
</script>

<template>
  <div class="layout-list-item">
    <div class="layout-list-item__header">
      <span class="layout-list-item__number">{{ number }}</span>
      <h4>{{ title }}</h4>
    </div>
    <div class="layout-list-item__content">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-list-item {
  border-bottom: 1px solid $color-border-main;

  padding: 2rem 0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    h4 {
      color: $color-text-main;

      margin: 0;
    }
  }
  
  &__number {
    background: $color-text-main;
    color: $color-text-contrast;
    
    padding: 0.3rem 0.8rem;
    margin-right: 1.5rem;
    border-radius: 2px;
    font-size: 0.85rem;
    font-weight: 600;
    min-width: 3rem;
    text-align: center;
  }
  
  &__content {
    margin-left: 4.5rem;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
}
</style>