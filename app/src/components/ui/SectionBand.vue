<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch'

defineProps<{ label: string }>()

const { isGlitching, trigger, glitchClass } = useGlitch()
</script>

<template>
  <p class="c-section-band">
    <span class="c-section-band__label" @mouseenter="trigger">
      <span :class="{ [glitchClass]: isGlitching }">{{ label }}</span>
    </span>
  </p>
</template>
