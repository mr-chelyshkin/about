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
      <div :class="$style.itemChainText">
        <div :class="$style.itemChainTextHeader">
          <h5 :class="$style.itemChainTextArea">{{ item.area }}</h5>
          <span :class="$style.itemChainTextResult">{{ item.result }}</span>
        </div>
        <p :class="$style.itemChainTextDescription">{{ item.description }}</p>
      </div>
    </template>
  </BaseChain>
</template>

<style module lang="scss">
.itemChainText {
  // Main container styles if needed
}

.itemChainTextHeader {
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

.itemChainTextArea {
  font-size: 1.1rem;
  font-weight: 600;
  color: $color-text-main;
  margin: 0;
}

.itemChainTextResult {
  color: $color-text-accent;
  font-size: $text-size-sm;
  font-weight: 700;
  white-space: nowrap;
}

.itemChainTextDescription {
  color: $color-text-secondary;
  font-size: $text-size-sm;
  line-height: 1.5;
  margin: 0;
}
</style>