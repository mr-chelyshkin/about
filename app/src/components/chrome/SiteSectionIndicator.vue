<script setup lang="ts">
import { watch } from 'vue'
import { useGlitch } from '@/composables/useGlitch'

interface Props {
  title: string
  number: string
}
const { isGlitching, trigger, glitchClass } = useGlitch({
  animation: 'c-glitch-digital',
  duration: 400,
})
const props = defineProps<Props>()

let isInitialized = false
watch([() => props.title, () => props.number], () => {
  if (isInitialized) {
    trigger()
  }
  isInitialized = true
})
</script>

<template>
  <div class="site-section-indicator">
    <span :class="['site-section-indicator__title', { [glitchClass]: isGlitching }]">
      {{ title.toUpperCase() }}
    </span>
    <span :class="['site-section-indicator__number', { [glitchClass]: isGlitching }]">
      {{ number }}
    </span>
  </div>
</template>
