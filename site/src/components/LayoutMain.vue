<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

import { useBlockTracker } from '@/composables/useBlockTracker'
import { useScrollLock } from '@/composables/useScrollLock'

import ContentAnchor from '@/components/content/ContentAnchor.vue'
import NavContent from '@/components/nav/NavContent.vue'
import NavBurger from '@/components/nav/NavBurger.vue'

const { currentBlockTitle, currentBlockNumber, initializeTracker, cleanup } = useBlockTracker()

const handleBurgerToggle = (isActive: boolean) => {
  isMenuOpen.value = isActive
}
const closeMenu = () => {
  isMenuOpen.value = false
  if (burgerButtonRef.value) {
    burgerButtonRef.value.isActive = false
  }
}

const { lock, unlock } = useScrollLock()
const isMenuOpen = ref(false)
const burgerButtonRef = ref()

watch(isMenuOpen, (v) => (v ? lock() : unlock()))
onMounted(() => {
  initializeTracker()
})
onUnmounted(() => {
  cleanup()
  unlock()
})
</script>

<template>
  <div :class="$style.layout">
    <div :class="$style.layoutBurgerContainer">
      <div :class="['container', $style.containerPointerEvents]">
        <NavBurger ref="burgerButtonRef" @toggle="handleBurgerToggle" />
      </div>
    </div>

    <header :class="$style.layoutHeader">
      <div class="container container__row_between">
        <div :class="$style.layoutBurgerPlaceholder"></div>
        <ContentAnchor :title="currentBlockTitle" :number="currentBlockNumber" />
      </div>
    </header>

    <main :class="$style.layoutMain">
      <slot />
    </main>

    <footer :class="$style.layoutFooter">
      <div class="container">&copy; {{ new Date().getFullYear() }} — Все права защищены.</div>
    </footer>

    <NavContent :is-open="isMenuOpen" @close="closeMenu" />
  </div>
</template>

<style module lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layoutHeader {
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

.layoutBurgerContainer {
  z-index: $z-index-nav-button;
  height: $header-height;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  pointer-events: none;
  align-items: center;
  position: fixed;
}

.containerPointerEvents {
  pointer-events: auto;
}

.layoutBurgerPlaceholder {
  width: 32px;
  height: 24px;
}

.layoutMain {
  flex: 1 1 0%;
  position: relative;
}

.layoutFooter {
  background: $color-background-main;
  padding: 1rem;
  text-align: center;
}
</style>