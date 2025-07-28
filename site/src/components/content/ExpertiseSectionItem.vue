<script setup lang="ts">
interface Props {
  label: string;
  value: string;
}

defineProps<Props>();
</script>

<template>
  <div class="tech-line">
    <span class="tech-label">{{ label }}:</span>
    <span class="tech-value">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
.tech-line {
  margin-bottom: $text-size-xsm;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .tech-label {
    font-size: $text-size-sm;
    color: $color-text-accent;
    min-width: 100px;
    font-weight: 700;
  }
  
  .tech-value {
    color: $color-text-main;
    font-weight: 400;
  }
}
</style>