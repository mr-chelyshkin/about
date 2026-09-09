<script setup lang="ts">
import type { CareerItem } from '@/contents'

interface Props {
  title: string
  items: CareerItem[]
}
defineProps<Props>()
</script>

<template>
  <div class="c-career-timeline">
    <div class="c-career-timeline__header">
      <span class="c-career-timeline__title">{{ title }}</span>
    </div>
    <ol class="c-career-timeline__track" role="list">
      <li
        v-for="item in items"
        :key="item.year"
        :class="['c-career-timeline__item', { 'c-career-timeline__item-current': item.current }]"
      >
        <div class="c-career-timeline__year">{{ item.year }}</div>
        <div class="c-career-timeline__role">{{ item.role }}</div>
        <div class="c-career-timeline__company">{{ item.company }}</div>
      </li>
    </ol>
  </div>
</template>
