import { ref } from 'vue'

export function useScrollLock() {
  const isLocked = ref(false)

  const lock = () => {
    if (!isLocked.value) {
      document.body.style.overflow = 'hidden'
      isLocked.value = true
    }
  }
  const unlock = () => {
    if (isLocked.value) {
      document.body.style.overflow = ''
      isLocked.value = false
    }
  }

  return {
    isLocked,
    lock,
    unlock,
  }
}
