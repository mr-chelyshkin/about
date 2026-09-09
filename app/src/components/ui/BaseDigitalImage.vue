<script setup lang="ts">
import { computed } from 'vue'
import { useImageGlitch } from '@/composables/useImageGlitch'

import BaseImage from '@/components/ui/BaseImage.vue'
import type { ImageFormat } from '@/types/ui'

interface Props {
  format?: ImageFormat
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
const imageProps = computed(() => ({
  src: props.src,
  alt: props.alt ?? 'image',
  priority: props.priority,
  ...(props.width !== undefined ? { width: props.width } : {}),
  ...(props.height !== undefined ? { height: props.height } : {}),
  ...(props.format !== undefined ? { format: props.format } : {}),
  ...(props.folder !== undefined ? { folder: props.folder } : {}),
}))
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
    v-bind="imageProps"
    :class="[
      'c-digital-image',
      { 'c-digital-image--pulse': props.pulse },
      { 'c-glitch-digital': isGlitching && props.glitch },
    ]"
    :style="{ '--glitch-duration': glitchDuration + 'ms' }"
  />
</template>
