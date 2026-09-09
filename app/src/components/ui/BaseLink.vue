<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch'
import type { GlitchAnimation } from '@/types/ui'

interface Props {
  to: string
  animation?: Exclude<GlitchAnimation, `${string}-slow`>
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'c-glitch-matrix-fast',
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
    active-class="c-link--active"
    :class="['c-link', { [glitchClass]: isGlitching }]"
    @click="handleClick"
    @mouseenter="trigger"
  >
    <slot />
  </router-link>
</template>
