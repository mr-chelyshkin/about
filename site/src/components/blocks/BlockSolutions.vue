<script setup lang="ts">
import ItemCardText from '@/components/items/ItemCardText.vue';
import BaseBlock from '@/components/base/BaseBlock.vue';

import { projects } from '@/data/solutions/projects';
import { achievements } from '@/data/solutions/achievements';

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>();
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <!-- Основные проекты -->
    <h4>Major Projects</h4>
    <div class="block-solutions-grid">
      <ItemCardText v-for="(item, index) in projects"
        :key="index"
        v-bind="item"
      />
    </div>

    <!-- Achievements секция -->
    <h4>Impact Summary</h4>
    
    <!-- Двухколоночный список с точками -->
    <div class="achievements-dots">
      <div v-for="(achievement, index) in achievements" 
           :key="index" 
           class="dot-item">
        <div class="dot-item__marker">
          <div class="dot"></div>
          <div class="line" v-if="index < achievements.length - 1"></div>
        </div>
        <div class="dot-item__content">
          <div class="dot-item__header">
            <h5 class="dot-item__area">{{ achievement.area }}</h5>
            <span class="dot-item__result">{{ achievement.result }}</span>
          </div>
          <p class="dot-item__description">{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </BaseBlock>
</template>

<style scoped lang="scss">
h4 {
  margin-top: 3rem;
  
  &:first-of-type {
    margin-top: 3rem;
  }
}

.block-solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 3rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 1.5rem;
  }
}

/* Двухколоночный список с точками */
.achievements-dots {
  padding: 2rem 0;
  position: relative;
}

.dot-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  &__marker {
    position: relative;
    flex-shrink: 0;
    width: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__content {
    flex: 1;
    padding-top: 0.2rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.8rem;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  &__area {
    font-size: 1.1rem;
    font-weight: 600;
    color: $color-text-main;
    margin: 0;
  }

  &__result {
    color: $color-text-accent;
    font-size: $text-size-sm;
    font-weight: 700;
    white-space: nowrap;
  }

  &__description {
    color: $color-text-secondary;
    font-size: $text-size-sm;
    line-height: 1.5;
    margin: 0;
  }
}

.dot {
  width: 12px;
  height: 12px;
  background: $color-text-accent;
  border-radius: 50%;
  border: 3px solid $color-background-main;
  box-shadow: 0 0 0 2px $color-text-accent;
  z-index: 2;
  position: relative;
}

.line {
  width: 2px;
  flex: 1;
  background: rgba($color-text-accent, 0.3);
  margin-top: 0.5rem;
}
</style>