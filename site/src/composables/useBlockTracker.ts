import { ref, onMounted, onUnmounted } from 'vue';

interface BlockInfo {
  title: string
  number: string
}

export function useBlockTracker() {
  const currentBlockTitle = ref<string>('');
  const currentBlockNumber = ref<string>('');
  
  let observer: IntersectionObserver | null = null;

  const initializeTracker = () => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      let mostVisible = entries[0];
      entries.forEach(entry => {
        if (entry.intersectionRatio > mostVisible.intersectionRatio) {
          mostVisible = entry;
        }
      });

      if (mostVisible && mostVisible.isIntersecting) {
        const element = mostVisible.target as HTMLElement;
        const number = element.dataset.blockNumber;
        const title = element.dataset.blockTitle;
        
        if (title && number) {
          currentBlockNumber.value = number;
          currentBlockTitle.value = title;
        }
      }
    }, observerOptions);

    setTimeout(() => {
      const blocks = document.querySelectorAll('[data-block-title]');
      blocks.forEach(block => { observer?.observe(block); })
    }, 100);
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
  return {
    currentBlockTitle,
    currentBlockNumber,
    initializeTracker,
    cleanup
  }
}