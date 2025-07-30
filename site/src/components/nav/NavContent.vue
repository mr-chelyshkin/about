<script setup lang="ts">
import { useGlitch } from '@/composables/useGlitch';

interface Props {
  isOpen: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{ close: []; }>();
const closeMenu = () => { emit('close'); }

// Используем composable для навигации
const { triggerByIndex, isGlitchingByIndex, glitchClass } = useGlitch({
  animation: 'glitch-digital-fast',
  duration: 200
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="nav-overlay" @click="closeMenu"></div>
    <nav class="nav-menu" :class="{ 'nav-menu--open': isOpen }">
      <div class="nav-menu__content">
        <ul class="nav-menu__list">
          <li class="nav-menu__item">
            <router-link 
              to="/" 
              class="nav-menu__link" 
              :class="{ [glitchClass]: isGlitchingByIndex(0) }"
              @click="closeMenu"
              @mouseenter="triggerByIndex(0)"
            >
              Home
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </Teleport>
</template>

<style scoped lang="scss">

.nav-overlay {
  z-index: $z-index-nav-overlay;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.nav-menu {
  --nav-content-width: 280px;
  background: $color-background-contrast;
  min-width: var(--nav-content-width);
  padding-top: $header-height;
  z-index: $z-index-nav-menu;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  width: calc(576px + max(0px, (100vw - $max-width) * 0.3));
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%);

  @media (max-width: 768px) {
    width: 75%;
    min-width: unset;
  }

  &--open {
    transform: translateX(0);
  }

  &__content {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;
  }

  &__list {
    width: var(--nav-content-width);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin-bottom: 0.5rem;
    text-align: right;
  }

  &__link {
    color: $color-text-contrast;
    position: relative;
    text-align: right;
    display: block;
    padding: 1rem 0;

    &::after {
      background: $color-text-contrast;
    }

    &.router-link-active {
      font-weight: 600;
    }
  }
}
</style>