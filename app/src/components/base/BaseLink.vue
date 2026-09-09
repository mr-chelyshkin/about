<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch'

interface Props {
  to: string
  animation?: 'glitch-digital' | 'glitch-digital-fast' | 'glitch-matrix' | 'glitch-matrix-fast'
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'glitch-matrix-fast',
  duration: 200,
})

const emit = defineEmits<{ click: [] }>()

const { trigger, isGlitching, glitchClass } = useGlitch({
  animation: props.animation,
  duration: props.duration,
})

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <router-link
    :to="to"
    :active-class="$style.routerLinkActive"
    :class="[$style.contentLink, { [glitchClass]: isGlitching }]"
    @click="handleClick"
    @mouseenter="trigger"
  >
    <slot />
  </router-link>
</template>

<style module lang="scss">
.contentLink {
  color: $color-text-contrast;

  position: relative;
  text-align: right;
  display: block;
  padding: 1rem 0;

  &::after {
    background: $color-text-contrast;
  }
}

.routerLinkActive {
  font-weight: 600;
}
</style>
