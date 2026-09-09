<script setup lang="ts">
import BaseLink from '@/components/ui/BaseLink.vue'

interface Props {
  to: string
}
defineProps<Props>()
defineEmits<{ click: [] }>()
</script>

<template>
  <BaseLink :to="to" animation="c-glitch-matrix" :duration="400" @click="$emit('click')">
    <slot />
  </BaseLink>
</template>
