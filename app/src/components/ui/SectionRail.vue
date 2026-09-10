<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch'

defineProps<{ index: string; label: string }>()

const { isGlitching, trigger, glitchClass } = useGlitch()
</script>

<template>
  <p class="c-section-rail">
    <span class="c-section-rail__text" @mouseenter="trigger">
      <span class="c-section-rail__label" :class="{ [glitchClass]: isGlitching }">
        <span>{{ index }}</span>
        <span>{{ label }}</span>
      </span>
    </span>
  </p>
</template>
