<script setup lang="ts">
import { ref } from 'vue'

import { siteContent } from '@/contents'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ toggle: [isOpen: boolean] }>()
const button = ref<HTMLButtonElement | null>(null)
defineExpose({ focus: () => button.value?.focus() })
const toggleMenu = () => {
  button.value?.focus()
  emit('toggle', !props.isOpen)
}
</script>

<template>
  <button
    ref="button"
    type="button"
    :class="['site-menu-toggle', { 'site-menu-toggle__active': isOpen }]"
    @click="toggleMenu"
    :aria-label="
      isOpen ? siteContent.accessibility.closeNavigation : siteContent.accessibility.openNavigation
    "
    :aria-expanded="isOpen"
    aria-controls="navigation-menu"
  >
    <span :class="['site-menu-toggle__line', 'site-menu-toggle__line1']"></span>
    <span :class="['site-menu-toggle__line', 'site-menu-toggle__line2']"></span>
    <span :class="['site-menu-toggle__line', 'site-menu-toggle__line3']"></span>
  </button>
</template>
