<script setup lang="ts">
import ViewHeader from '@/components/view/ViewHeader.vue'
import BaseContainer from '@/components/layout/BaseContainer.vue'

interface Props {
  eyebrow: string
  number: string
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="c-view-section">
    <ViewHeader :title="title" :eyebrow="eyebrow" :number="number" />
    <BaseContainer>
      <slot />
    </BaseContainer>
  </div>
</template>
