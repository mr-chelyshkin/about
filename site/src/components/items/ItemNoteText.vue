<script setup lang="ts">
import BaseNote from '@/components/base/BaseNote.vue'

interface Props {
  header: string
  content: string[]
}
const props = defineProps<Props>()
</script>

<template>
  <BaseNote :header="props.header">
    <p :class="$style.itemNoteText" v-for="(paragraph, index) in props.content" :key="index">
      {{ paragraph }}
    </p>
  </BaseNote>
</template>

<style module lang="scss">
.itemNoteText {
  color: $color-text-main;
  font-size: 1.1rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>