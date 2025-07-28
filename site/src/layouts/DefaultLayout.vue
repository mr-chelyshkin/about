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

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    lock();
  } else {
    unlock();
  }
});
onMounted(() => { initializeTracker(); });
onUnmounted(() => { 
  cleanup(); 
  unlock();
});
</script>

<template>
  <div class="layout">
    <header class="layout__header">
      <div class="container container__row_between">
        <div class="layout__burger">
          <NavBurger ref="burgerButtonRef" @toggle="handleBurgerToggle" />
        </div>
        <div class="anchor">
          <span class="anchor__title">{{ currentBlockTitle }}</span>
          <span class="anchor__number">{{ currentBlockNumber }}</span>
        </div>
      </div>
    </header>

    <main class="layout__main">
      <slot />
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

  &__burger {
    z-index: $z-index-nav-button;

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
  }

  &__number {
    font-weight: 300;
  }
}
</style>