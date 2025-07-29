<script setup lang="ts">
interface Props {
  items: any[];
}
defineProps<Props>();
</script>

<template>
  <div class="base-timeline-list">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-item__marker">
        <div class="dot"></div>
        <div class="line"></div>
      </div>
      <div class="timeline-item__content">
        <slot :item="item" :index="index"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-timeline-list {
  position: relative;
}

.timeline-item {
  margin-bottom: 2.5rem;
  gap: 2rem;
  display: flex;
  
  &:last-child {
    margin-bottom: 0;
  }

  &__marker {
    flex-shrink: 0;
    width: 20px;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
  }

  &__content {
    flex: 1;
    padding-top: 0.2rem;
  }
}

.dot {
  border: 3px solid $color-background-main;
  box-shadow: 0 0 0 2px $color-text-accent;
  background: $color-text-accent;

  z-index: 2;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
}

.line {
  background: rgba($color-text-accent, 0.3);

  margin-top: 0.5rem;
  width: 2px;
  flex: 1;
}
</style>