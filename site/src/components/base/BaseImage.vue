<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

interface Props {
  format?: 'webp' | 'jpg' | 'png'

  height?: number
  width?: number

  responsive?: boolean
  priority?: boolean
  lazy?: boolean

  src: string
  alt: string

  sizes?: string
  folder?: string
}

const isLoaded = ref(false)
const hasError = ref(false)

const props = withDefaults(defineProps<Props>(), {
  responsive: true,
  priority: false,
  lazy: true,

  format: 'webp',
  folder: '',
})
const getImagePath = (width: number) => {
  const folder = props.folder ? `${props.folder}/` : ''
  return `/images/${folder}${props.src}-${width}.${props.format}`
}
const optimizedSrc = computed(() => {
  const defaultWidth = props.width || 800
  return getImagePath(defaultWidth)
})
const srcSet = computed(() => {
  if (!props.responsive) return undefined

  const widths = [400, 800, 1200, 1600]
  return widths.map((width) => `${getImagePath(width)} ${width}w`).join(', ')
})
const defaultSizes = '(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px'
const loadingValue = computed(() => {
  if (props.priority) return 'eager'
  if (props.lazy) return 'lazy'
  return undefined
})
const handleError = () => {
  hasError.value = true
}
const handleLoad = () => {
  isLoaded.value = true
}

onMounted(() => {
  if (props.priority) {
    const link = document.createElement('link')
    link.href = optimizedSrc.value
    link.rel = 'preload'
    link.as = 'image'

    document.head.appendChild(link)
  }
})
</script>

<template>
  <img
    :sizes="responsive ? sizes || defaultSizes : undefined"
    :srcset="responsive ? srcSet : undefined"
    :loading="loadingValue"
    :src="optimizedSrc"
    :height="height"
    :width="width"
    :alt="alt"
    :class="[$style.baseImage, { [$style.loaded]: isLoaded }, { [$style.error]: hasError }]"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<style module lang="scss">
.baseImage {
  display: block;
  transition: opacity 0.3s ease;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }

  &.error {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
</style>
