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
      {{ title.toUpperCase() }}
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
  font-size: $text-size-xlg;

  font-weight: 600;
  position: relative;

  @media (max-width: 419px) {
    font-size: $text-size-lg;
  }
}

.contentAnchorNumber {
  font-size: $text-size-xlg;

  font-weight: 300;
  position: relative;

  @media (max-width: 419px) {
    font-size: $text-size-lg;
  }
}
</style>
