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
const route = useRoute()

const toggleMenu = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
}
const closeMenu = () => {
  isMenuOpen.value = false
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
})
onUnmounted(() => {
  cleanup()
  unlock()
})
</script>

<template>
  <div class="site-header__menu-container">
    <BaseContainer class="site-header__menu-inner">
      <SiteMenuToggle :is-open="isMenuOpen" @toggle="toggleMenu" />
    </BaseContainer>
  </div>

  <header class="site-header">
    <BaseContainer class="o-container--row-between">
      <SiteSectionIndicator :title="currentBlockTitle" :number="currentBlockNumber" />
      <div class="site-header__menu-placeholder"></div>
    </BaseContainer>
  </header>

  <SiteNavigation :is-open="isMenuOpen" @close="closeMenu" />
</template>
