<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import BaseContainer from '@/components/layout/BaseContainer.vue'
import SiteMenuToggle from '@/components/chrome/SiteMenuToggle.vue'
import SiteNavigation from '@/components/chrome/SiteNavigation.vue'
import { useScrollLock } from '@/composables/useScrollLock'
import { siteContent } from '@/contents'

const { lock, unlock } = useScrollLock()
const isMenuOpen = ref(false)
const header = ref<HTMLElement | null>(null)
const menuToggle = ref<InstanceType<typeof SiteMenuToggle> | null>(null)

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
onMounted(() => document.addEventListener('keydown', closeOnEscape))
onUnmounted(() => {
  unlock()
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <header ref="header" class="site-header site-header--poster" @focusout="closeOnFocusLeave">
    <BaseContainer class="o-container--row-between">
      <a
        class="site-header__identity"
        :href="siteContent.links.home"
        :aria-label="`${siteContent.brand.fullName}, home`"
      >
        <img src="/favicon.svg" alt="" width="28" height="28" />
        <span>{{ siteContent.brand.fullName }}</span>
      </a>
      <SiteMenuToggle ref="menuToggle" :is-open="isMenuOpen" @toggle="toggleMenu" />
    </BaseContainer>
    <SiteNavigation :is-open="isMenuOpen" @close="closeMenu" />
  </header>
</template>
