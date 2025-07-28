<script setup lang="ts">
import CareerSolutionItem from './CareerSolutionItem.vue';

interface SolutionItem {
  problem: string;
  solution: string;
  result: string;
}

interface Props {
  items: SolutionItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="problem-solutions">
    <div class="solutions-header">
      <span class="solutions-title">// Problem → Solution</span>
    </div>
    <div class="solution-list">
      <CareerSolutionItem
        v-for="(item, index) in items"
        :key="index"
        :problem="item.problem"
        :solution="item.solution"
        :result="item.result"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.problem-solutions {
  margin-bottom: 2rem;
  padding: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.solutions-header {
  margin-bottom: 1.5rem;
  
  .solutions-title {
    font-size: $text-size-sm;
    color: $color-text-secondary;
  }
}
</style>