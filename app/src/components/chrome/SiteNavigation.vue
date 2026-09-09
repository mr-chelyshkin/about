<script setup lang="ts">
import BaseLink from '@/components/ui/BaseLink.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
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
  <div v-if="isOpen" class="site-navigation__nav-overlay" @click="closeMenu"></div>
  <nav
    :class="['site-navigation', { 'site-navigation__open': isOpen }]"
    id="navigation-menu"
    :inert="!isOpen"
  >
    <div class="site-navigation__content">
      <ul class="site-navigation__list">
        <li class="site-navigation__item">
          <BaseLink :to="siteContent.links.home" @click="closeMenu">
            {{ siteContent.actions.home }}
          </BaseLink>
        </li>
      </ul>
      <SocialLinks
        class="site-navigation__socials"
        :profiles="siteContent.socialProfiles"
        @click="closeMenu"
      />
    </div>
  </nav>
</template>
