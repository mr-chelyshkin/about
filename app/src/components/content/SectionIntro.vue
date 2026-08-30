<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    titleId?: string
    description?: string
    compact?: boolean
  }>(),
  {
    titleId: undefined,
    description: '',
    compact: false,
  },
)
</script>

<template>
  <header :class="['section-intro', { 'section-intro--compact': compact }]">
    <p class="c-eyebrow">{{ eyebrow }}</p>
    <h2 :id="titleId" class="section-intro__title">{{ title }}</h2>
    <p v-if="description" class="section-intro__description">{{ description }}</p>
  </header>
</template>
