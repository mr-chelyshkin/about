<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <span class="c-signal-text">
    <span>{{ text }}</span>
    <span class="c-signal-text__slice" aria-hidden="true">{{ text }}</span>
    <span class="c-signal-text__slice c-signal-text__slice--echo" aria-hidden="true">
      {{ text }}
    </span>
  </span>
</template>
