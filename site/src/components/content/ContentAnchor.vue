<script setup lang="ts">
import { watch } from 'vue'
import { useGlitch } from '@/composables/useGlitch'

interface Props {
  title: string
  number: string
}
const { isGlitching, trigger, glitchClass } = useGlitch({
  animation: 'glitch-digital',
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
  <div :class="$style.contentAnchor">
    <span :class="[$style.contentAnchorTitle, { [glitchClass]: isGlitching }]">
      {{ title }}
    </span>
    <span :class="[$style.contentAnchorNumber, { [glitchClass]: isGlitching }]">
      {{ number }}
    </span>
  </div>
</template>

<style module lang="scss">
.contentAnchor {
  display: flex;
  gap: 0.3rem;
}

.contentAnchorTitle {
  font-weight: 600;
  position: relative;
}

.contentAnchorNumber {
  font-weight: 300;
  position: relative;
}
</style>
