<script setup lang="ts">
import BaseListItem from '@/components/base/BaseListItem.vue'

interface Props {
  number: string
  title: string
  data: { key: string; value: string }[]
}
const props = defineProps<Props>()
</script>

<template>
  <BaseListItem :number="props.number" :title="props.title">
    <div v-for="techLine in props.data" :key="techLine.key" :class="$style.itemListKv">
      <span :class="$style.itemListKvLabel">{{ techLine.key }}:</span>
      <span :class="$style.itemListKvValue">{{ techLine.value }}</span>
    </div>
  </BaseListItem>
</template>

<style module lang="scss">
.itemListKv {
  margin-bottom: $text-size-xsm;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
  }
}

.itemListKvLabel {
  font-size: $text-size-md;
  color: $color-text-accent;

  min-width: 100px;
  font-weight: 700;

  @media (max-width: 419px) {
    font-size: $text-size-lg;
  }
}

.itemListKvValue {
  color: $color-text-main;
  font-size: $text-size-lg;

  font-weight: 400;

  @media (max-width: 419px) {
    font-size: $text-size-md;
  }
}
</style>
