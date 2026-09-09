<script setup lang="ts">
import { computed, ref } from 'vue'

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
const imageUrls = import.meta.glob('../../assets/images/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const getImagePath = (width: number) => {
  const folder = props.folder ? `${props.folder}/` : ''
  const source = `../../assets/images/${folder}${props.src}-${width}.${props.format}`
  const imageUrl = imageUrls[source]

  if (!imageUrl) throw new Error(`Image asset not found: ${source}`)

  return imageUrl
}
const optimizedSrc = computed(() => {
  const defaultWidth = props.width || 800
  return getImagePath(defaultWidth)
})
const srcSet = computed(() => {
  const widths = [400, 800, 1200, 1600]
  return widths.map((width) => `${getImagePath(width)} ${width}w`).join(', ')
})
const defaultSizes = '(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px'
const loadingValue = computed<'eager' | 'lazy' | undefined>(() => {
  if (props.priority) return 'eager'
  if (props.lazy) return 'lazy'
  return undefined
})
const imageAttributes = computed(() => ({
  ...(props.responsive ? { sizes: props.sizes || defaultSizes, srcset: srcSet.value } : {}),
  ...(loadingValue.value ? { loading: loadingValue.value } : {}),
  ...(props.height !== undefined ? { height: props.height } : {}),
  ...(props.width !== undefined ? { width: props.width } : {}),
}))
const handleError = () => {
  hasError.value = true
}
const handleLoad = () => {
  isLoaded.value = true
}
</script>

<template>
  <img
    v-bind="imageAttributes"
    :fetchpriority="priority ? 'high' : 'auto'"
    :src="optimizedSrc"
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
