<script setup lang="ts">
import ItemCardText from '@/components/items/ItemCardText.vue';
import BaseBlock from '@/components/base/BaseBlock.vue';

import { projects } from '@/data/solutions/projects';

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>();
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <h4>Projects</h4>
    <div class="block-solutions-grid">
      <ItemCardText v-for="(item, index) in projects"
        :key="index"
        v-bind="item"
      />
    </div>
  </BaseBlock>
</template>

<style scoped lang="scss">
h4 {
  margin-top: 3rem;
}

.block-solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 3rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 1.5rem;
  }
}
</style>