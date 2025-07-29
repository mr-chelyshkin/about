<script setup lang="ts">
import NoteLayout from '@/components/layouts/NoteLayout.vue';

interface Props {
  header: string;
  content: string[];
}
const props = defineProps<Props>();
</script>

<template>
  <NoteLayout :header="props.header">
    <p class="note-text" v-for="(paragraph, index) in props.content" :key="index">{{ paragraph }}</p>
  </NoteLayout>
</template>

<style scoped lang="scss">
.note-text {
  color: $color-text-main;
  font-size: 1.1rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>