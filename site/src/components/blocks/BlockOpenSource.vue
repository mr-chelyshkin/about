<script setup lang="ts">
import BaseBlock from '@/components/base/BaseBlock.vue';

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>();
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    
  </BaseBlock>
</template>

<style scoped lang="scss">

</style>