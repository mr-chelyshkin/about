<script setup lang="ts">
import BaseBlock from '@/components/base/BaseBlock.vue'

import ItemCardText from '@/components/items/ItemCardText.vue'

import { projects } from '@/data/opensource/projects'

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>()
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <div :class="$style.blockSolutionsPrjGrid">
      <ItemCardText v-for="(item, index) in projects" :key="index" v-bind="item" />
    </div>
  </BaseBlock>
</template>

<style module lang="scss">
.blockSolutionsPrjGrid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  display: grid;
  padding: 3rem 0 9rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 1.5rem;
  }
}
</style>