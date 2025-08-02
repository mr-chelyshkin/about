<script setup lang="ts">
import { useImageGlitch } from '@/composables/useImageGlitch'

import BaseImage from '@/components/base/BaseImage.vue'

interface Props {
  format?: 'webp' | 'jpg' | 'png'
  priority?: boolean
  glitch?: boolean
  pulse?: boolean

  src: string
  alt?: string
  folder?: string

  width?: number
  height?: number
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
  <BaseImage
    :src="props.src"
    :alt="props.alt || 'image'"
    :width="props.width"
    :height="props.height"
    :priority="props.priority"
    :format="props.format"
    :folder="props.folder"
    :class="[
      $style.digitalImage,
      { [$style.pulse]: props.pulse },
      { 'glitch-digital': isGlitching && props.glitch },
    ]"
    :style="{ '--glitch-duration': glitchDuration + 'ms' }"
  />
</template>

<style module lang="scss">
.digitalImage {
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
}

.pulse {
  animation: pulse 18s ease-in-out infinite;
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

<style lang="scss">
.glitch-digital {
  animation: digital-corruption var(--glitch-duration, 400ms) ease-in-out;
}
</style>
