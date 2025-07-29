<script setup lang="ts">
import ItemListKV from '@/components/items/ItemListKV.vue';

interface TechLine {
  key: string;
  value: string;
}

interface ExpertiseSection {
  number: string;
  title: string;
  data: TechLine[];
}

interface Props {
  sections: ExpertiseSection[];
}

defineProps<Props>();
</script>

<template>
  <div class="expertise-list">
    <ItemListKV 
      v-for="section in sections" 
      :key="section.number" 
      :number="section.number" 
      :title="section.title"
      :data="section.data"
    />
  </div>
</template>