<script setup lang="ts">
import LayoutCard from '@/components/base/BaseCard.vue';

interface Props {
  problem: string;
  solution: string;
  result: string;
  href?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <LayoutCard :href="props.href">
    <div class="item__header">
      <div class="item__header-label h-label">Problem</div>
      <div class="item__header-text h-text">{{ problem }}</div>
    </div>
    
    <div class="item__body">
      <div class="item__body-label b-label">Solution</div>
      <div class="item__body-text b-text">{{ solution }}</div>
    </div>
    
    <div class="item__footer">
      <div class="item__footer-label f-label">Result</div>
      <div class="item__footer-text f-text">{{ result }}</div>
    </div>
  </LayoutCard>
</template>

<style scoped lang="scss">
.item__header,
.item__body,
.item__footer {
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.item__header-label,
.item__body-label,
.item__footer-label {
  font-family: $font-main;
  font-size: $text-size-xsm;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
}

.item__header-text,
.item__body-text,
.item__footer-text {
  font-size: $text-size-sm;
  line-height: 1.4;
}

.h-label {
  color: $color-text-accent;
}

.b-label {
  color: $color-text-main;
}

.f-label {
  color: $color-text-secondary;
}

.h-text {
  color: $color-text-main;
  font-weight: 600;
}

.b-text {
  color: $color-text-main;
}

.f-text {
  color: $color-text-secondary;
  font-style: italic;
}
</style>