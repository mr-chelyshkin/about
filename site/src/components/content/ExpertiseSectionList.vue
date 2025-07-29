<script setup lang="ts">
import ListKV from '@/components/items/ListKV.vue';

interface TechLine {
  label: string;
  value: string;
}

interface ExpertiseSection {
  number: string;
  title: string;
  techLines: TechLine[];
}

interface Props {
  sections: ExpertiseSection[];
}

defineProps<Props>();
</script>

<template>
  <div class="expertise-list">
    <ListKV 
      v-for="section in sections" 
      :key="section.number" 
      :number="section.number" 
      :title="section.title"
      :techLines="section.techLines"
    />
  </div>
</template>