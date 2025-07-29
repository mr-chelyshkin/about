<script setup lang="ts">
import ItemList from './ItemList.vue';

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
    <div v-for="section in sections" :key="section.number" class="expertise-section">
      <div class="section-header">
        <span class="section-number">{{ section.number }}</span>
        <h4>{{ section.title }}</h4>
      </div>
      <div class="section-content">
        <ItemList v-for="techLine in section.techLines" :key="techLine.label" :label="techLine.label" :value="techLine.value"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.expertise-section {
  border-bottom: 1px solid $color-border-main;
  padding: 2rem 0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    
    .section-number {
      background: $color-text-main;
      color: $color-text-contrast;

      padding: 0.3rem 0.8rem;
      margin-right: 1.5rem;
      border-radius: 2px;
      font-size: 0.85rem;
      font-weight: 600;
      min-width: 3rem;
      text-align: center;
    }
    
    h4 {
      color: $color-text-main;
      margin: 0;
    }
  }
  
  .section-content {
    margin-left: 4.5rem;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
}
</style>