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
    <dl>
      <div v-for="techLine in props.data" :key="techLine.key" class="c-key-value-list">
        <dt class="c-key-value-list__label">{{ techLine.key }}:</dt>
        <dd class="c-key-value-list__value">{{ techLine.value }}</dd>
      </div>
    </dl>
  </BaseListItem>
</template>
