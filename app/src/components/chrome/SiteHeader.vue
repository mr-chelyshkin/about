<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import SiteMenuToggle from '@/components/chrome/SiteMenuToggle.vue'
import SiteNavigation from '@/components/chrome/SiteNavigation.vue'
import SiteSectionIndicator from '@/components/chrome/SiteSectionIndicator.vue'
import BaseContainer from '@/components/layout/BaseContainer.vue'
import { useBlockTracker } from '@/composables/useBlockTracker'
import { useScrollLock } from '@/composables/useScrollLock'

const { currentBlockTitle, currentBlockNumber, initializeTracker, cleanup } = useBlockTracker()
const { lock, unlock } = useScrollLock()
const isMenuOpen = ref(false)
const header = ref<HTMLElement | null>(null)
const menuToggle = ref<InstanceType<typeof SiteMenuToggle> | null>(null)
const route = useRoute()

const toggleMenu = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
}
const closeMenu = () => {
  isMenuOpen.value = false
  menuToggle.value?.focus()
}
const closeOnFocusLeave = (event: FocusEvent) => {
  if (event.relatedTarget instanceof Node && !header.value?.contains(event.relatedTarget)) {
    isMenuOpen.value = false
  }
}
const closeOnEscape = (event: KeyboardEvent) => {
  if (isMenuOpen.value && event.key === 'Escape') {
    event.preventDefault()
    closeMenu()
  }
}

watch(isMenuOpen, (isOpen) => (isOpen ? lock() : unlock()))
watch(
  () => route.path,
  () => {
    cleanup()
    initializeTracker()
  },
  { flush: 'post' },
)
onMounted(() => {
  initializeTracker()
  document.addEventListener('keydown', closeOnEscape)
})
onUnmounted(() => {
  cleanup()
  unlock()
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <header ref="header" class="site-header" @focusout="closeOnFocusLeave">
    <div class="site-header__menu-container">
      <BaseContainer class="site-header__menu-inner">
        <SiteMenuToggle ref="menuToggle" :is-open="isMenuOpen" @toggle="toggleMenu" />
      </BaseContainer>
    </div>
    <BaseContainer class="o-container--row-between">
      <SiteSectionIndicator :title="currentBlockTitle" :number="currentBlockNumber" />
      <div class="site-header__menu-placeholder"></div>
    </BaseContainer>
    <SiteNavigation :is-open="isMenuOpen" @close="closeMenu" />
  </header>
</template>
