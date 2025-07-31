<script setup lang="ts">
import ItemCardText from '@/components/items/ItemCardText.vue'
import ItemChainText from '@/components/items/ItemChainText.vue'
import BaseBlock from '@/components/base/BaseBlock.vue'

import { projects } from '@/data/solutions/projects'
import { achievements } from '@/data/solutions/achievements'

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>()
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <h4 :class="$style.sectionTitle">Major Projects</h4>
    <div :class="$style.blockSolutionsPrjGrid">
      <ItemCardText v-for="(item, index) in projects" :key="index" v-bind="item" />
    </div>

    <h4 :class="$style.sectionTitle">Impact Summary</h4>
    <div :class="$style.blockSolutionsAchGrid">
      <ItemChainText :items="achievements" />
    </div>
  </BaseBlock>
</template>

<style module lang="scss">
.sectionTitle {
  margin: 3rem 0;
}

.blockSolutionsPrjGrid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  display: grid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 1.5rem;
  }
}

.blockSolutionsAchGrid {
  padding-bottom: 9rem;
}
</style>
