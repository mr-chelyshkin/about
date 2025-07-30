<script setup lang="ts">
import BaseChain from '@/components/base/BaseChain.vue'

interface AchievementItem {
  area: string
  result: string
  description: string
}

interface Props {
  items: AchievementItem[]
}

defineProps<Props>()
</script>

<template>
  <BaseChain :items="items">
    <template #default="{ item }">
      <div class="item-chain-text">
        <div class="item-chain-text__header">
          <h5 class="item-chain-text__area">{{ item.area }}</h5>
          <span class="item-chain-text__result">{{ item.result }}</span>
        </div>
        <p class="item-chain-text__description">{{ item.description }}</p>
      </div>
    </template>
  </BaseChain>
</template>

<style scoped lang="scss">
.item-chain-text {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.8rem;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  &__area {
    font-size: 1.1rem;
    font-weight: 600;
    color: $color-text-main;
    margin: 0;
  }

  &__result {
    color: $color-text-accent;
    font-size: $text-size-sm;
    font-weight: 700;
    white-space: nowrap;
  }

  &__description {
    color: $color-text-secondary;
    font-size: $text-size-sm;
    line-height: 1.5;
    margin: 0;
  }
}
</style>
