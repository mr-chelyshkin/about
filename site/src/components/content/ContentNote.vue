<script setup lang="ts">
interface Props {
  header: string;
  content: string;
}

defineProps<Props>();
</script>

<template>
  <div class="content-note">
    <div class="note-header">{{ header }}</div>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
.content-note {
  background: #f8f9fa;
  padding: 2rem;
  border-left: 4px solid $color-text-main;
  
  .note-header {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  p {
    color: $color-text-main;
    line-height: 1.6;
    font-size: 1.1rem;
    margin: 0;
  }
}
</style>