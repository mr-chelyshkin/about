<script setup lang="ts">
import LayoutCard from '@/components/base/BaseCard.vue';

interface DataItem {
  key: string;
  value: string;
}
interface Props {
  header?: DataItem;
  footer?: DataItem;
  body?: DataItem;
  href?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <LayoutCard :href="props.href">
    <div v-if="header" class="item-card-text__header">
      <div class="item-card-text__header-label h-label">{{ header.key }}</div>
      <div class="item-card-text__header-text h-text">{{ header.value }}</div>
    </div>
    <div v-if="body" class="item-card-text__body">
      <div class="item-card-text__body-label b-label">{{ body.key }}</div>
      <div class="item-card-text__body-text b-text">{{ body.value }}</div>
    </div>
    <div v-if="footer" class="item-card-text__footer">
      <div class="item-card-text__footer-label f-label">{{ footer.key }}</div>
      <div class="item-card-text__footer-text f-text">{{ footer.value }}</div>
    </div>
  </LayoutCard>
</template>

<style scoped lang="scss">
.item-card-text__header,
.item-card-text__body,
.item-card-text__footer {
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
}

.item-card-text__header-label,
.item-card-text__body-label,
.item-card-text__footer-label {
  font-family: $font-main;
  font-size: $text-size-xsm;

  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
}

.item-card-text__header-text,
.item-card-text__body-text,
.item-card-text__footer-text {
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