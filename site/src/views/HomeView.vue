<script setup lang="ts">
import BlockHero from '@/components/blocks/BlockHero.vue';
import BlockExpertise from '@/components/blocks/BlockExpertise.vue';
import BlockSolutions from '@/components/blocks/BlockSolutions.vue';
import BlockOpenSource from '@/components/blocks/BlockOpenSource.vue';
</script>

<template>
  <main>
    <BlockHero 
      title="WELCOME" 
      number="01" 
    />

    <BlockExpertise
      title="Engineering Expertise & Practices."
      subtitle="EXPERTISE"
      block-number="02"
    />

    <BlockSolutions
      title="Real-World Impact."
      subtitle="SOLUTIONS"
      blockNumber="03"
    />

    <BlockOpenSource
      title="Shared with the World."
      subtitle="OpenSource"
      blockNumber="04"
    />
  </main>
</template>