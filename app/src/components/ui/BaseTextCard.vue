<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import type { KeyValuePair } from '@/types/ui'

interface Props {
  header?: KeyValuePair
  footer?: KeyValuePair
  body?: KeyValuePair
  href?: string
}
const props = defineProps<Props>()
</script>

<template>
  <BaseCard v-bind="props.href === undefined ? {} : { href: props.href }" class="c-text-card">
    <div v-if="header" class="c-text-card__header">
      <div :class="['c-text-card__header-label', 'c-text-card__h-label']">{{ header.key }}</div>
      <div :class="['c-text-card__header-text', 'c-text-card__h-text']">{{ header.value }}</div>
    </div>
    <div v-if="body" class="c-text-card__body">
      <div :class="['c-text-card__body-label', 'c-text-card__b-label']">{{ body.key }}</div>
      <div :class="['c-text-card__body-text', 'c-text-card__b-text']">{{ body.value }}</div>
    </div>
    <div v-if="footer" class="c-text-card__footer">
      <div :class="['c-text-card__footer-label', 'c-text-card__f-label']">{{ footer.key }}</div>
      <div :class="['c-text-card__footer-text', 'c-text-card__f-text']">{{ footer.value }}</div>
    </div>
  </BaseCard>
</template>
