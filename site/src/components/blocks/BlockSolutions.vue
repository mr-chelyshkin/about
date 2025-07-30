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
    <h4>Major Projects</h4>
    <div class="block-solutions-prj-grid">
      <ItemCardText v-for="(item, index) in projects" :key="index" v-bind="item" />
    </div>

    <h4>Impact Summary</h4>
    <div class="block-solutions-ach-grid">
      <ItemChainText :items="achievements" />
    </div>
  </BaseBlock>
</template>

<style scoped lang="scss">
h4 {
  margin: 3rem 0;
}

.block-solutions-prj-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  display: grid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 1.5rem;
  }
}

.block-solutions-ach-grid {
  padding-bottom: 9rem;
}
</style>
