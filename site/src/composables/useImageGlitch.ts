import { ref, onMounted, onUnmounted } from 'vue'

interface UseImageGlitchOptions {
  minDelay?: number
  maxDelay?: number
  autoStart?: boolean
  initialMinDelay?: number
  initialMaxDelay?: number
  minGlitchDuration?: number
  maxGlitchDuration?: number
}

export function useImageGlitch(options: UseImageGlitchOptions = {}) {
  const {
    minGlitchDuration = 300,
    maxGlitchDuration = 1200,
    initialMinDelay = 3000,
    initialMaxDelay = 8000,
    maxDelay = 15000,
    minDelay = 8000,
    autoStart = true,
  } = options

  const glitchDuration = ref(400)
  const isGlitching = ref(false)

  let scheduleTimeoutId: number | null = null
  let glitchTimeoutId: number | null = null

  const getRandomDelay = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }
  const triggerGlitch = () => {
    const duration = getRandomDelay(minGlitchDuration, maxGlitchDuration)
    glitchDuration.value = duration
    isGlitching.value = true
    glitchTimeoutId = window.setTimeout(() => {
      isGlitching.value = false
    }, duration)
  }
  const scheduleNextGlitch = () => {
    const delay = getRandomDelay(minDelay, maxDelay)
    scheduleTimeoutId = window.setTimeout(() => {
      triggerGlitch()
      scheduleNextGlitch()
    }, delay)
  }
  const startAutoGlitch = () => {
    const initialDelay = getRandomDelay(initialMinDelay, initialMaxDelay)
    scheduleTimeoutId = window.setTimeout(() => {
      triggerGlitch()
      scheduleNextGlitch()
    }, initialDelay)
  }

  const stopAutoGlitch = () => {
    if (glitchTimeoutId) {
      clearTimeout(glitchTimeoutId)
      glitchTimeoutId = null
    }
    if (scheduleTimeoutId) {
      clearTimeout(scheduleTimeoutId)
      scheduleTimeoutId = null
    }
    isGlitching.value = false
  }

  onMounted(() => {
    if (autoStart) {
      startAutoGlitch()
    }
  })
  onUnmounted(() => {
    stopAutoGlitch()
  })

  return {
    isGlitching,
    glitchDuration,

    startAutoGlitch,
    stopAutoGlitch,
    triggerGlitch,
  }
}
