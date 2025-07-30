<script setup lang="ts">
import ContentBlockHeader from '@/components/content/ContentBlockHeader.vue'

interface Props {
  subtitle: string
  number: string
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="base-block">
    <ContentBlockHeader :title="title" :subtitle="subtitle" :number="number" />
    <div class="container">
      <slot />
    </div>
  </div>
</template>
