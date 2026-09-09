<script setup lang="ts">
import BaseListItem from '@/components/ui/BaseListItem.vue'
import type { KeyValuePair } from '@/types/ui'

interface Props {
  number: string
  title: string
  data: KeyValuePair[]
}
const props = defineProps<Props>()
</script>

<template>
  <BaseListItem :number="props.number" :title="props.title">
    <div v-for="techLine in props.data" :key="techLine.key" class="c-key-value-list">
      <span class="c-key-value-list__label">{{ techLine.key }}:</span>
      <span class="c-key-value-list__value">{{ techLine.value }}</span>
    </div>
  </BaseListItem>
</template>
