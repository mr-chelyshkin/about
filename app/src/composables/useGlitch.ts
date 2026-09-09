import { onScopeDispose, ref } from 'vue'

import type { GlitchAnimation } from '@/types/ui'

interface UseGlitchOptions {
  animation?: GlitchAnimation
  duration?: number
}

export function useGlitch(options: UseGlitchOptions = {}) {
  const { animation = 'c-glitch-digital-fast', duration = 200 } = options

  const isGlitching = ref(false)
  let timeout: ReturnType<typeof setTimeout> | undefined

  const trigger = () => {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }

    isGlitching.value = true
    timeout = setTimeout(() => {
      isGlitching.value = false
      timeout = undefined
    }, duration)
  }

  onScopeDispose(() => {
    if (timeout !== undefined) {
      clearTimeout(timeout)
      timeout = undefined
    }
    isGlitching.value = false
  })

  return {
    isGlitching,
    trigger,
    glitchClass: animation,
    duration,
  }
}
