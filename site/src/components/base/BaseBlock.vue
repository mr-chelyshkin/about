<script setup lang="ts">
import BlockHeader from '@/components/content/BlockHeader.vue';

interface Props {
  subtitle: string;
  number: string;
  title: string;
}
defineProps<Props>();
</script>

<template>
  <div class="base-block">
    <BlockHeader :title="title" :subtitle="subtitle" :number="number" />
    <div class="container">
      <slot/>
    </div>
  </div>
</template>