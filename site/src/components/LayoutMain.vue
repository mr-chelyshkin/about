<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useBlockTracker } from '@/composables/useBlockTracker';
import { useScrollLock } from '@/composables/useScrollLock';

import NavContent from '@/components/nav/NavContent.vue';
import NavBurger from '@/components/nav/NavBurger.vue';

const { 
  currentBlockTitle, 
  currentBlockNumber, 
  initializeTracker, 
  cleanup 
} = useBlockTracker();

const handleBurgerToggle = (isActive: boolean) => { isMenuOpen.value = isActive; }
const closeMenu = () => { isMenuOpen.value = false; if (burgerButtonRef.value) { burgerButtonRef.value.isActive = false; }}

const { lock, unlock } = useScrollLock();
const isMenuOpen = ref(false);
const burgerButtonRef = ref();

// Добавляем логику для анимации
const isChanging = ref(false);
const prevBlockTitle = ref('');
const prevBlockNumber = ref('');

// Отслеживаем изменения блоков
watch([currentBlockTitle, currentBlockNumber], () => {
  // Проверяем, что это не первая загрузка
  if (prevBlockTitle.value !== '' && prevBlockNumber.value !== '') {
    isChanging.value = true;
    // Убираем класс анимации через 600ms
    setTimeout(() => {
      isChanging.value = false;
    }, 600);
  }
  prevBlockTitle.value = currentBlockTitle.value;
  prevBlockNumber.value = currentBlockNumber.value;
});

watch(isMenuOpen, v => v ? lock() : unlock());
onMounted(() => { initializeTracker(); });
onUnmounted(() => { 
  cleanup(); 
  unlock();
});
</script>

<template>
  <div class="layout">
    <div class="layout__burger-container">
      <div class="container">
        <NavBurger ref="burgerButtonRef" @toggle="handleBurgerToggle" />
      </div>
    </div>

    <header class="layout__header">
      <div class="container container__row_between">
        <div class="layout__burger-placeholder"></div>
<div class="anchor">
  <span 
    class="anchor__title" 
    :class="{ 'anchor__title--changing': isChanging }"
  >
    {{ currentBlockTitle }}
  </span>
  <span 
    class="anchor__number" 
    :class="{ 'anchor__number--changing': isChanging }"
  >
    {{ currentBlockNumber }}
  </span>
</div>
      </div>
    </header>

    <main class="layout__main">
      <slot/>
    </main>

    <footer class="layout__footer">
      <div class="container">
        &copy; {{ new Date().getFullYear() }} — Все права защищены.
      </div>
    </footer>

    <NavContent :is-open="isMenuOpen" @close="closeMenu" />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    background: $color-background-main;
    box-shadow: $shadow-header;
    z-index: $z-index-header;
    color: $color-text-main;
    height: $header-height;

    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
  }

  &__burger-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
    z-index: $z-index-nav-button;
    pointer-events: none;
    
    display: flex;
    align-items: center;
    
    .container {
      pointer-events: auto;
    }
  }

  &__burger-placeholder {
    width: 32px;
    height: 24px;
  }

  &__burger {
    position: relative;
  }

  &__main {
    flex: 1 1 0%;
    position: relative;
  }

  &__footer {
    background: $color-background-main;

    padding: 1rem;
    text-align: center;
  }
}

.anchor {
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