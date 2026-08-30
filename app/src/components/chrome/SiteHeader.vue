<script setup lang="ts">
import { Menu, X } from '@lucide/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { siteContent } from '@/contents'

const header = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)
const isMenuOpen = ref(false)
const menuId = 'primary-navigation-mobile'

function closeMenu(restoreFocus = false) {
  if (!isMenuOpen.value) return
  isMenuOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handlePointerDown(event: PointerEvent) {
  if (!isMenuOpen.value || !(event.target instanceof Node)) return
  if (!header.value?.contains(event.target)) closeMenu()
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu(true)
}

function handleResize() {
  closeMenu()
}

onMounted(() => {
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header ref="header" class="site-header">
    <div class="o-container site-header__inner">
      <RouterLink
        class="site-header__brand"
        :to="{ name: 'home' }"
        :aria-label="siteContent.accessibility.home"
        @click="closeMenu()"
      >
        <span aria-hidden="true">{{ siteContent.person.shortName }}</span>
        <span class="site-header__signal" aria-hidden="true"></span>
      </RouterLink>

      <nav class="site-header__nav" :aria-label="siteContent.accessibility.primaryNavigation">
        <a v-for="item in siteContent.navigation" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <a class="site-header__contact" :href="siteContent.links.contact" target="_blank" rel="noreferrer">
          Contact <span aria-hidden="true">↗</span>
        </a>
        <button
          ref="menuButton"
          class="site-header__menu-toggle"
          type="button"
          :aria-label="
            isMenuOpen
              ? siteContent.accessibility.closeNavigation
              : siteContent.accessibility.openNavigation
          "
          :aria-controls="menuId"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <X v-if="isMenuOpen" :size="20" aria-hidden="true" />
          <Menu v-else :size="20" aria-hidden="true" />
        </button>
      </div>

      <nav
        v-if="isMenuOpen"
        :id="menuId"
        class="site-header__mobile-nav"
        :aria-label="siteContent.accessibility.primaryNavigation"
        @click="closeMenu()"
      >
        <a v-for="item in siteContent.navigation" :key="item.href" :href="item.href">
          <span>{{ item.label }}</span><span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  </header>
</template>
