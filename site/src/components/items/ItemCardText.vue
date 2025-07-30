<script setup lang="ts">
import LayoutCard from '@/components/base/BaseCard.vue'

interface DataItem {
  key: string
  value: string
}
interface Props {
  header?: DataItem
  footer?: DataItem
  body?: DataItem
  href?: string
}
const props = defineProps<Props>()
</script>

<template>
  <LayoutCard :href="props.href" class="item-card-text">
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
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.item-card-text__header-label,
.item-card-text__body-label,
.item-card-text__footer-label {
  font-family: $font-main;
  font-size: $text-size-xsm;

  transition: opacity 0.3s ease;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  opacity: 0.8;
}

.item-card-text__header-label {
  font-size: $text-size-xsm;

  letter-spacing: 1.2px;
  position: relative;
  opacity: 1;

  &::after {
    background: $color-text-accent;

    content: '';
    transition: width 0.3s ease;
    position: absolute;
    bottom: -3px;
    width: 20px;
    height: 2px;
    left: 0;
  }
}

.item-card-text__header-text,
.item-card-text__body-text,
.item-card-text__footer-text {
  transition: all 0.3s ease;
  font-size: 0.95rem;
  line-height: 1.6;
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
  font-size: 1.05rem;
}

.b-text {
  color: $color-text-main;

  font-weight: 400;
}

.f-text {
  color: $color-text-secondary;

  font-style: italic;
  font-size: 0.9rem;
}

.item-card-text__header {
  border-bottom: 1px solid rgba($color-text-main, 0.05);

  padding-bottom: 1rem;
}

.item-card-text__body {
  padding: 1rem 0;
}

.item-card-text:hover {
  .item-card-text__header-label::after {
    width: 40px;
  }

  .item-card-text__body-label,
  .item-card-text__footer-label {
    opacity: 1;
  }

  .h-text {
    color: $color-text-accent;

    transform: translateX(5px);
  }
}
</style>
