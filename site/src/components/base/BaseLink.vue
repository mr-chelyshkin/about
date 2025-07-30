<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch'

interface Props {
  to: string
  index: number
  animation?: 'glitch-digital' | 'glitch-digital-fast' | 'glitch-matrix' | 'glitch-matrix-fast'
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'glitch-matrix-fast',
  duration: 200,
})

const emit = defineEmits<{ click: [] }>()

const { triggerByIndex, isGlitchingByIndex, glitchClass } = useGlitch({
  animation: props.animation,
  duration: props.duration,
})

const handleClick = () => {
  emit('click')
}

const handleMouseEnter = () => {
  triggerByIndex(props.index)
}
</script>

<template>
  <router-link
    :to="to"
    :class="[
      $style.contentLink,
      { [$style.routerLinkActive]: $route.matched.some((record: { path: any }) => record.path === to) },
      { [glitchClass]: isGlitchingByIndex(index) }
    ]"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
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