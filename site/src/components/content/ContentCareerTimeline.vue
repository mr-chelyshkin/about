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
  <div class="content-career-timeline">
    <div class="content-career-timeline__header">
      <span class="content-career-timeline__title">// Career Journey</span>
    </div>
    <div class="content-career-timeline__track">
      <div v-for="item in items" :key="item.year" class="content-career-timeline__item" :class="{ 'content-career-timeline__item--current': item.current }">
        <div class="content-career-timeline__year">{{ item.year }}</div>
        <div class="content-career-timeline__role">{{ item.role }}</div>
        <div class="content-career-timeline__company">{{ item.company }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-career-timeline {
  padding: 3rem;

  &__header {
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: $text-size-sm;
    color: $color-text-secondary;
  }

  &__track {
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

  &__item {
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

    &--current::before {
      background: $color-accent;
    }
  }

  &__year {
    color: $color-text-secondary;
    font-size: $text-size-xsm;
    font-weight: 600;
  }

  &__role {
    font-size: $text-size-sm;
    color: $color-text-main;
    font-weight: 600;
    margin: 0.2rem 0;
  }

  &__company {
    font-size: $text-size-xsm;
    color: $color-text-secondary;
  }
}
</style>