<script setup lang="ts">
import { useImageGlitch } from '@/composables/useImageGlitch'

interface Props {
  src: string
  alt?: string
  pulse?: boolean
  glitch?: boolean
}

const props = defineProps<Props>()
const { isGlitching, glitchDuration } = useImageGlitch({
  minDelay: 7000,
  maxDelay: 18000,
  minGlitchDuration: 300,
  maxGlitchDuration: 1300,
  initialMinDelay: 5000,
  initialMaxDelay: 10000,
  autoStart: props.glitch === true,
})
</script>

<template>
  <img
    :class="{ 'glitch-active': isGlitching, pulse: props.pulse }"
    :style="{ '--glitch-duration': glitchDuration + 'ms' }"
    :src="props.src"
    :alt="props.alt || 'image'"
  />
</template>

<style scoped lang="scss">
img {
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
}

.pulse {
  animation: pulse 18s ease-in-out infinite;
}

.glitch-active {
  animation:
    pulse 18s ease-in-out infinite,
    digital-corruption var(--glitch-duration, 400ms) ease-in-out;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
