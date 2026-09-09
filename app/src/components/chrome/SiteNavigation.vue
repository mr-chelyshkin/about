<script setup lang="ts">
import BaseMatrixLink from '@/components/ui/BaseMatrixLink.vue'
import { siteContent } from '@/contents'

interface Props {
  isOpen: boolean
}
const emit = defineEmits<{ close: [] }>()
const closeMenu = () => {
  emit('close')
}
defineProps<Props>()
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="site-navigation__nav-overlay" @click="closeMenu"></div>
    <nav
      :class="['site-navigation', { 'site-navigation__open': isOpen }]"
      id="navigation-menu"
      :inert="!isOpen"
    >
      <div class="site-navigation__content">
        <ul class="site-navigation__list">
          <li class="site-navigation__item">
            <BaseMatrixLink :to="siteContent.links.home" @click="closeMenu">
              {{ siteContent.actions.home }}
            </BaseMatrixLink>
          </li>
        </ul>
      </div>
    </nav>
  </Teleport>
</template>
