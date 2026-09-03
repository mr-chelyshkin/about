import { ref } from 'vue'

export type GlitchAnimation =
  | 'glitch-digital'
  | 'glitch-digital-fast'
  | 'glitch-digital-slow'
  | 'glitch-matrix'
  | 'glitch-matrix-fast'
  | 'glitch-matrix-slow'

interface UseGlitchOptions {
  animation?: GlitchAnimation
  duration?: number
}

export function useGlitch(options: UseGlitchOptions = {}) {
  const { animation = 'glitch-digital-fast', duration = 200 } = options

  const isGlitching = ref(false)
  const trigger = () => {
    isGlitching.value = true
    setTimeout(() => {
      isGlitching.value = false
    }, duration)
  }

  const glitchingItems = ref<Set<number>>(new Set())
  const triggerByIndex = (index: number) => {
    glitchingItems.value.add(index)
    setTimeout(() => {
      glitchingItems.value.delete(index)
    }, duration)
  }

  const isGlitchingByIndex = (index: number) => {
    return glitchingItems.value.has(index)
  }
  const createWatcher = <T>() => {
    const prevValue = ref<T>()
    return (newValue: T) => {
      if (prevValue.value !== undefined && prevValue.value !== newValue) {
        trigger()
      }
      prevValue.value = newValue
    }
  }

  return {
    isGlitching,
    glitchingItems,

    trigger,
    triggerByIndex,
    isGlitchingByIndex,
    createWatcher,

    glitchClass: animation,
    duration,
  }
}
