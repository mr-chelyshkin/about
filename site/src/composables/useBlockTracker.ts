// src/composables/useBlockTracker.ts
import { ref, onMounted, onUnmounted } from 'vue'

interface BlockInfo {
  title: string
  number: string
}

export function useBlockTracker() {
  const currentBlockTitle = ref<string>('')
  const currentBlockNumber = ref<string>('')
  
  let observer: IntersectionObserver | null = null

  const initializeTracker = () => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // срабатывает когда блок ближе к центру
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      // Находим блок с наибольшей видимостью
      let mostVisible = entries[0]
      entries.forEach(entry => {
        if (entry.intersectionRatio > mostVisible.intersectionRatio) {
          mostVisible = entry
        }
      })

      if (mostVisible && mostVisible.isIntersecting) {
        const element = mostVisible.target as HTMLElement
        const title = element.dataset.blockTitle
        const number = element.dataset.blockNumber
        
        if (title && number) {
          currentBlockTitle.value = title
          currentBlockNumber.value = number
        }
      }
    }, observerOptions)

    // Ждем немного, чтобы DOM загрузился
    setTimeout(() => {
      const blocks = document.querySelectorAll('[data-block-title]')
      console.log('Found blocks:', blocks.length) // для отладки
      blocks.forEach(block => {
        console.log('Observing:', block.getAttribute('data-block-title')) // для отладки
        observer?.observe(block)
      })
    }, 100)
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    currentBlockTitle,
    currentBlockNumber,
    initializeTracker,
    cleanup
  }
}