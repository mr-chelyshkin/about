<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import type { IconProps } from '@/types/ui'

defineProps<IconProps>()
</script>

<template>
  <BaseIcon v-bind="$props">
    <path d="M5 19 19 5M5 5h14v14" fill="none" stroke="currentColor" stroke-width="1.5" />
  </BaseIcon>
</template>
