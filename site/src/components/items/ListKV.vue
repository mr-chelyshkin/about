<script setup lang="ts">
import ListLayout from '@/components/layouts/ListLayout.vue';

interface Props {
  number: string;
  title: string;
  techLines: { label: string; value: string; }[];
}

const props = defineProps<Props>();
</script>

<template>
  <ListLayout :number="props.number" :title="props.title">
    <div v-for="techLine in props.techLines" :key="techLine.label" class="item">
      <span class="item__label">{{ techLine.label }}:</span>
      <span class="item__value">{{ techLine.value }}</span>
    </div>
  </ListLayout>
</template>

<style scoped lang="scss">
.item {
  margin-bottom: $text-size-xsm;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
  }
  
  &__label {
    font-size: $text-size-sm;
    color: $color-text-accent;
    min-width: 100px;
    font-weight: 700;
  }
  
  &__value {
    color: $color-text-main;
    font-weight: 400;
  }
}
</style>