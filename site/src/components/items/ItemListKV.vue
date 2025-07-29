<script setup lang="ts">
import BaseListItem from '@/components/base/BaseListItem.vue';

interface Props {
  number: string;
  title: string;
  data: { key: string; value: string; }[];
}
const props = defineProps<Props>();
</script>

<template>
  <BaseListItem :number="props.number" :title="props.title">
    <div v-for="techLine in props.data" :key="techLine.key" class="item-list-kv">
      <span class="item-list-kv__label">{{ techLine.key }}:</span>
      <span class="item-list-kv__value">{{ techLine.value }}</span>
    </div>
  </BaseListItem>
</template>

<style scoped lang="scss">
.item-list-kv {
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