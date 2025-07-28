<script setup lang="ts">
interface Props {
  problem: string;
  solution: string;
  result: string;
}

defineProps<Props>();
</script>

<template>
  <div class="solution-item">
    <div class="problem">{{ problem }}</div>
    <div class="arrow">→</div>
    <div class="solution">{{ solution }}</div>
    <div class="result">{{ result }}</div>
  </div>
</template>

<style scoped lang="scss">
.solution-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  .problem {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }
  
  .arrow {
    font-family: 'Roboto Mono', monospace;
    color: $color-text-main;
    font-weight: 600;
    margin: 0.3rem 0;
  }
  
  .solution {
    font-size: 0.85rem;
    color: $color-text-main;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }
  
  .result {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    color: #000;
    background: #e8f5e8;
    padding: 0.3rem 0.6rem;
    border-radius: 2px;
    font-weight: 600;
    display: inline-block;
  }
}
</style>