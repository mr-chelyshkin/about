<script setup lang="ts" generic="T">
interface Props {
  items: T[]
}
defineProps<Props>()
</script>

<template>
  <div :class="$style.baseTimelineList">
    <div v-for="(item, index) in items" :key="index" :class="$style.timelineItem">
      <div :class="$style.timelineItemMarker">
        <div :class="$style.dot"></div>
        <div :class="$style.line"></div>
      </div>
      <div :class="$style.timelineItemContent">
        <slot :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.baseTimelineList {
  position: relative;
}

.timelineItem {
  margin-bottom: 2.5rem;
  gap: 2rem;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
}

.timelineItemMarker {
  flex-shrink: 0;
  width: 20px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}

.timelineItemContent {
  flex: 1;
  padding-top: 0.2rem;
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