<script setup lang="ts">
interface CareerItem {
  year: string
  role: string
  company: string
  current?: boolean
}
interface Props {
  items: CareerItem[]
}
defineProps<Props>()
</script>

<template>
  <div :class="$style.contentCareerTimeline">
    <div :class="$style.contentCareerTimelineHeader">
      <span :class="$style.contentCareerTimelineTitle">// Career Journey</span>
    </div>
    <div :class="$style.contentCareerTimelineTrack">
      <div
        v-for="item in items"
        :key="item.year"
        :class="[
          $style.contentCareerTimelineItem,
          { [$style.contentCareerTimelineItemCurrent]: item.current },
        ]"
      >
        <div :class="$style.contentCareerTimelineYear">{{ item.year }}</div>
        <div :class="$style.contentCareerTimelineRole">{{ item.role }}</div>
        <div :class="$style.contentCareerTimelineCompany">{{ item.company }}</div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.contentCareerTimeline {
  padding: 3rem;

  @media (max-width: 968px) {
    padding: 0;
  }
}

.contentCareerTimelineHeader {
  margin-bottom: 1.5rem;
}

.contentCareerTimelineTitle {
  font-size: $text-size-sm;
  color: $color-text-secondary;
}

.contentCareerTimelineTrack {
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
}

.contentCareerTimelineItem {
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
}

.contentCareerTimelineItemCurrent {
  &::before {
    background: $color-accent;
    z-index: 2;
  }

  &::after {
    background: $color-accent;
    content: '';
    animation: pulse 2s ease-out infinite;
    position: absolute;
    border-radius: 50%;
    left: 2.2rem;
    top: 0.2rem;
    height: 12px;
    opacity: 0.6;
    width: 12px;
    z-index: 1;
  }
}

.contentCareerTimelineYear {
  color: $color-text-secondary;
  font-size: $text-size-xsm;
  font-weight: 600;
}

.contentCareerTimelineRole {
  font-size: $text-size-sm;
  color: $color-text-main;
  font-weight: 600;
  margin: 0.2rem 0;
}

.contentCareerTimelineCompany {
  font-size: $text-size-xsm;
  color: $color-text-secondary;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  70% {
    transform: scale(2.5);
    opacity: 0;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
