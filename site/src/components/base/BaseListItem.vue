<script setup lang="ts">
interface Props {
  number: string
  title: string
}
defineProps<Props>()
</script>

<template>
  <div :class="$style.baseListItem">
    <div :class="$style.baseListItemHeader">
      <span :class="$style.baseListItemNumber">{{ number }}</span>
      <h4 :class="$style.headerTitle">{{ title }}</h4>
    </div>
    <div :class="$style.baseListItemContent">
      <slot />
    </div>
  </div>
</template>

<style module lang="scss">
.baseListItem {
  border-bottom: 1px solid $color-border-main;
  padding: 2rem 0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 419px) {
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
  }
}

.baseListItemHeader {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 419px) {
    margin-bottom: 1rem;
  }
}

.headerTitle {
  color: $color-text-main;
  margin: 0;

  @media (max-width: 968px) {
    font-size: 2rem;
  }

  @media (max-width: 679px) {
    font-size: 1.4rem;
  }

  @media (max-width: 339px) {
    font-size: 1.1rem;
  }
}

.baseListItemNumber {
  background: $color-text-main;
  color: $color-text-contrast;
  padding: 0.3rem 0.8rem;
  margin-right: 1.5rem;
  border-radius: 2px;
  font-weight: 600;
  min-width: 3rem;
  text-align: center;

  @media (max-width: 968px) {
    font-size: 2rem;
  }

  @media (max-width: 679px) {
    font-size: 2.1rem;
  }

  @media (max-width: 339px) {
    font-size: 1.6rem;
  }
}

.baseListItemContent {
  margin-left: 4.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
}
</style>
