<script setup lang="ts">
import BaseChain from '@/components/ui/BaseChain.vue'
import type { AchievementItem } from '@/contents'

interface Props {
  items: AchievementItem[]
}

defineProps<Props>()
</script>

<template>
  <BaseChain :items="items">
    <template #default="{ item }">
      <div class="c-achievement-timeline">
        <div class="c-achievement-timeline__header">
          <h5 class="c-achievement-timeline__area">{{ item.area }}</h5>
          <span class="c-achievement-timeline__result">{{ item.result }}</span>
        </div>
        <p class="c-achievement-timeline__description">{{ item.description }}</p>
      </div>
    </template>
  </BaseChain>
</template>
