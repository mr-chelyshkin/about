<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

import { useBlockTracker } from '@/composables/useBlockTracker';
import { useScrollLock } from '@/composables/useScrollLock';

import ContentAnchor from '@/components/content/ContentAnchor.vue';
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
        <ContentAnchor :title="currentBlockTitle" :number="currentBlockNumber" 
        />
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
    z-index: $z-index-nav-button;
    height: $header-height;

    top: 0;
    left: 0;
    right: 0;
    display: flex;
    pointer-events: none;
    align-items: center;
    position: fixed;
    
    .container {
      pointer-events: auto;
    }
  }

  &__burger-placeholder {
    width: 32px;
    height: 24px;
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
</style>