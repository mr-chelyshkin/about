<script setup lang="ts">
import BaseNote from '@/components/ui/BaseNote.vue'

interface Props {
  header: string
  content: string[]
}
const props = defineProps<Props>()
</script>

<template>
  <BaseNote :header="props.header">
    <p class="c-text-note" v-for="(paragraph, index) in props.content" :key="index">
      {{ paragraph }}
    </p>
  </BaseNote>
</template>
