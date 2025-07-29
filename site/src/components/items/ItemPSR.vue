<script setup lang="ts">
import ItemLayout from '@/components/layouts/CardLayout.vue';

interface Props {
  problem: string;
  solution: string;
  result: string;
  href?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <ItemLayout :href="props.href">
    <div class="item__header">
      <div class="item__header-label h-label">Problem</div>
      <div class="item__header-text h-text">{{ problem }}</div>
    </div>
    
    <div class="item__body">
      <div class="item__body-label b-label">Solution</div>
      <div class="item__body-text b-text">{{ solution }}</div>
    </div>
    
    <div class="item__footer">
      <div class="item__footer-label f-label">Result</div>
      <div class="item__footer-text f-text">{{ result }}</div>
    </div>
  </ItemLayout>
</template>