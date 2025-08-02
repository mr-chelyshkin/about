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
}

.baseListItemContent {
  margin-left: 4.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
}
</style>
