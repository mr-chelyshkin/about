<script setup lang="ts">
import BaseContainer from '@/components/layout/BaseContainer.vue'

interface Props {
  eyebrow: string
  number: string
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="c-view-header" :data-block-title="eyebrow" :data-block-number="number">
    <BaseContainer>
      <p class="c-view-header__subtitle">// {{ eyebrow.toUpperCase() }}</p>
      <h2 class="c-view-header__title">{{ title }}</h2>
    </BaseContainer>
  </div>
</template>
