<script setup lang="ts">
interface Props {
  number: string
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="c-list-item">
    <div class="c-list-item__header">
      <span class="c-list-item__number">{{ number }}</span>
      <h3 class="c-list-item__header-title">{{ title }}</h3>
    </div>
    <div class="c-list-item__content">
      <slot />
    </div>
  </div>
</template>
