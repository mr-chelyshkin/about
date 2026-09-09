<script setup lang="ts" generic="T">
interface Props {
  items: T[]
}
defineProps<Props>()
</script>

<template>
  <ul class="c-chain" role="list">
    <li v-for="(item, index) in items" :key="index" class="c-chain__timeline-item">
      <div class="c-chain__timeline-item-marker">
        <div class="c-chain__dot"></div>
        <div class="c-chain__line"></div>
      </div>
      <div class="c-chain__timeline-item-content">
        <slot :item="item" :index="index" />
      </div>
    </li>
  </ul>
</template>
