<script setup lang="ts">
import BaseSignalText from '@/components/ui/BaseSignalText.vue'

defineProps<{ id: string; lines: readonly string[] }>()
</script>

<template>
  <h2 :id="id" class="c-section-heading">
    <BaseSignalText
      v-for="line in lines"
      :key="line"
      :text="line"
      class="c-section-heading__line"
    />
  </h2>
</template>
