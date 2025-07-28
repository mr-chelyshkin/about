<script setup lang="ts">
interface CareerItem {
  year: string;
  role: string;
  company: string;
  current?: boolean;
}

interface Props {
  items: CareerItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="career-timeline">
    <div class="timeline-header">
      <span class="timeline-title">// Career Journey</span>
    </div>
    <div class="timeline-track">
      <div v-for="item in items" :key="item.year" class="timeline-item" :class="{ current: item.current }">
        <div class="timeline-year">{{ item.year }}</div>
        <div class="timeline-role">{{ item.role }}</div>
        <div class="timeline-company">{{ item.company }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.career-timeline {
  margin-bottom: 2rem;
  padding: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-header {
  margin-bottom: 1.5rem;
  
  .timeline-title {
    font-size: $text-size-sm;
    color: $color-text-secondary;
  }
}

.timeline-track {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2.5rem;
    top: 0.5rem;
    bottom: 0;
    width: 2px;
    background: #b3b3b3;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 4rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &::before {
      content: '';
      position: absolute;
      left: 2.25rem;
      top: 0.3rem;
      width: 10px;
      height: 10px;
      background: $color-gray;
      border-radius: 50%;
      border: 2px solid $color-white;
    }
    
    &.current::before {
      background: $color-accent;
    }
    
    .timeline-year {
      color: $color-text-secondary;
      font-size: $text-size-xsm;
      font-weight: 600;
    }
    
    .timeline-role {
      font-size: $text-size-sm;
      color: $color-text-main;
      font-weight: 600;
      margin: 0.2rem 0;
    }
    
    .timeline-company {
      font-size: $text-size-xsm;
      color: $color-text-secondary;
    }
  }
}
</style>