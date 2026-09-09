<script setup lang="ts">
import BaseChain from '@/components/ui/BaseChain.vue'
import type { AchievementItem } from '@/contents'

interface Props {
  items: AchievementItem[]
  headingLevel?: 3 | 4
}

withDefaults(defineProps<Props>(), { headingLevel: 3 })
</script>

<template>
  <BaseChain :items="items">
    <template #default="{ item }">
      <div class="c-achievement-timeline">
        <div class="c-achievement-timeline__header">
          <component :is="`h${headingLevel}`" class="c-achievement-timeline__area">
            {{ item.area }}
          </component>
          <span class="c-achievement-timeline__result">{{ item.result }}</span>
        </div>
        <p class="c-achievement-timeline__description">{{ item.description }}</p>
      </div>
    </template>
  </BaseChain>
</template>
