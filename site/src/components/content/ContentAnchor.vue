<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  title: string;
  number: string;
}

const props = defineProps<Props>();

// Локальная логика для анимации
const isChanging = ref(false);
const prevTitle = ref('');
const prevNumber = ref('');

// Отслеживаем изменения пропсов
watch([() => props.title, () => props.number], () => {
  // Проверяем, что это не первая загрузка
  if (prevTitle.value !== '' && prevNumber.value !== '') {
    isChanging.value = true;
    // Убираем класс анимации через 800ms
    setTimeout(() => {
      isChanging.value = false;
    }, 800);
  }
  prevTitle.value = props.title;
  prevNumber.value = props.number;
});
</script>

<template>
  <div class="content-anchor">
    <span 
      class="content-anchor__title" 
      :class="{ 'content-anchor__title--changing': isChanging }"
    >
      {{ title }}
    </span>
    <span 
      class="content-anchor__number" 
      :class="{ 'content-anchor__number--changing': isChanging }"
    >
      {{ number }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.content-anchor {
  display: flex;
  gap: 0.3rem;

  &__title {
    font-weight: 600;
    position: relative;
    
    &--changing {
      animation: intense-glitch 0.8s ease-in-out;
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(255,0,0,0.1) 25%, 
          transparent 50%, 
          rgba(0,255,0,0.1) 75%, 
          transparent 100%);
        pointer-events: none;
      }
      
      &::before {
        animation: glitch-overlay-1 0.8s ease-in-out;
        z-index: 1;
      }
      
      &::after {
        animation: glitch-overlay-2 0.8s ease-in-out;
        z-index: 2;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(0,0,255,0.1) 25%, 
          transparent 50%, 
          rgba(255,255,0,0.1) 75%, 
          transparent 100%);
      }
    }
  }

  &__number {
    font-weight: 300;
    position: relative;
    
    &--changing {
      animation: intense-glitch 0.8s ease-in-out;
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(255,0,0,0.1) 25%, 
          transparent 50%, 
          rgba(0,255,0,0.1) 75%, 
          transparent 100%);
        pointer-events: none;
      }
      
      &::before {
        animation: glitch-overlay-1 0.8s ease-in-out;
        z-index: 1;
      }
      
      &::after {
        animation: glitch-overlay-2 0.8s ease-in-out;
        z-index: 2;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(0,0,255,0.1) 25%, 
          transparent 50%, 
          rgba(255,255,0,0.1) 75%, 
          transparent 100%);
      }
    }
  }
}

// Основная анимация глитча
@keyframes intense-glitch {
  0%, 100% { 
    transform: translate(0) scaleX(1);
    opacity: 1;
    filter: contrast(1) brightness(1);
    text-shadow: none;
  }
  
  5% { 
    transform: translate(-2px, 1px) scaleX(0.98);
    opacity: 0.8;
    filter: contrast(1.2) brightness(1.1);
    text-shadow: 2px 0 0 rgba(255,0,0,0.5);
  }
  
  10% { 
    transform: translate(-1px, -2px) scaleX(1.02);
    opacity: 0.9;
    filter: contrast(0.8) brightness(0.9) hue-rotate(90deg);
    text-shadow: -1px 0 0 rgba(0,255,0,0.5);
  }
  
  15% { 
    transform: translate(3px, 1px) scaleX(0.96);
    opacity: 0.7;
    filter: contrast(1.5) brightness(1.2);
    text-shadow: 1px 0 0 rgba(255,0,0,0.7), -1px 0 0 rgba(0,0,255,0.7);
  }
  
  20% { 
    transform: translate(2px, -1px) scaleX(1.04);
    opacity: 0.85;
    filter: contrast(0.6) brightness(0.8) hue-rotate(180deg);
    text-shadow: -2px 0 0 rgba(0,255,0,0.6);
  }
  
  25% { 
    transform: translate(-3px, 2px) scaleX(0.94);
    opacity: 0.6;
    filter: contrast(1.8) brightness(1.3) saturate(2);
    text-shadow: 3px 0 0 rgba(255,255,0,0.5), -1px 0 0 rgba(255,0,255,0.5);
  }
  
  30% { 
    transform: translate(1px, -3px) scaleX(1.06);
    opacity: 0.75;
    filter: contrast(0.4) brightness(0.7) hue-rotate(270deg);
    text-shadow: -1px 0 0 rgba(0,255,255,0.8);
  }
  
  35% { 
    transform: translate(-2px, 3px) scaleX(0.92);
    opacity: 0.9;
    filter: contrast(2) brightness(1.4);
    text-shadow: 2px 0 0 rgba(255,0,0,0.9), -2px 0 0 rgba(0,0,255,0.9);
  }
  
  40% { 
    transform: translate(4px, -1px) scaleX(1.08);
    opacity: 0.5;
    filter: contrast(0.3) brightness(0.6) hue-rotate(45deg);
    text-shadow: -4px 0 0 rgba(0,255,0,0.7);
  }
  
  45% { 
    transform: translate(-4px, 2px) scaleX(0.88);
    opacity: 0.8;
    filter: contrast(1.7) brightness(1.5) saturate(0.5);
    text-shadow: 4px 0 0 rgba(255,255,0,0.6), 2px 0 0 rgba(255,0,255,0.6);
  }
  
  50% { 
    transform: translate(2px, -4px) scaleX(1.12);
    opacity: 0.4;
    filter: contrast(0.2) brightness(0.5) hue-rotate(135deg) blur(0.5px);
    text-shadow: -2px 0 0 rgba(0,255,255,0.9), 2px 0 0 rgba(255,0,0,0.9);
  }
  
  55% { 
    transform: translate(-1px, 4px) scaleX(0.86);
    opacity: 0.85;
    filter: contrast(1.9) brightness(1.6);
    text-shadow: 1px 0 0 rgba(0,0,255,0.8);
  }
  
  60% { 
    transform: translate(3px, -2px) scaleX(1.14);
    opacity: 0.7;
    filter: contrast(0.1) brightness(0.4) hue-rotate(225deg);
    text-shadow: -3px 0 0 rgba(255,255,0,0.7), 1px 0 0 rgba(0,255,0,0.7);
  }
  
  70% { 
    transform: translate(1px, -1px) scaleX(1.16);
    opacity: 0.6;
    filter: contrast(0.05) brightness(0.3) hue-rotate(315deg) blur(1px);
    text-shadow: -1px 0 0 rgba(255,0,255,0.9);
  }
  
  80% { 
    transform: translate(2px, -2px) scaleX(1.18);
    opacity: 0.8;
    filter: contrast(0.7) brightness(0.9) hue-rotate(60deg);
    text-shadow: 2px 0 0 rgba(0,255,255,0.6), -2px 0 0 rgba(255,0,0,0.6);
  }
  
  90% { 
    transform: translate(1px, -1px) scaleX(1.1);
    opacity: 0.95;
    filter: contrast(0.9) brightness(0.95) hue-rotate(30deg);
    text-shadow: 1px 0 0 rgba(0,0,255,0.3);
  }
}

// Анимация для первого оверлея
@keyframes glitch-overlay-1 {
  0%, 100% { 
    transform: translate(0);
    opacity: 0;
  }
  
  10% { 
    transform: translate(-3px, 2px);
    opacity: 0.3;
  }
  
  30% { 
    transform: translate(-4px, 1px);
    opacity: 0.5;
  }
  
  50% { 
    transform: translate(-2px, 4px);
    opacity: 0.2;
  }
  
  70% { 
    transform: translate(-1px, 3px);
    opacity: 0.4;
  }
  
  90% { 
    transform: translate(-3px, 1px);
    opacity: 0.1;
  }
}

// Анимация для второго оверлея
@keyframes glitch-overlay-2 {
  0%, 100% { 
    transform: translate(0);
    opacity: 0;
  }
  
  15% { 
    transform: translate(2px, -3px);
    opacity: 0.4;
  }
  
  35% { 
    transform: translate(4px, -1px);
    opacity: 0.3;
  }
  
  55% { 
    transform: translate(3px, -4px);
    opacity: 0.2;
  }
  
  75% { 
    transform: translate(1px, -3px);
    opacity: 0.3;
  }
  
  95% { 
    transform: translate(3px, -1px);
    opacity: 0.1;
  }
}
</style>