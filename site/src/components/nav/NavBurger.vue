<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
const emit = defineEmits<{ toggle: [isActive: boolean]; }>();
const toggleMenu = () => { isActive.value = !isActive.value; emit('toggle', isActive.value); }

defineExpose({
  toggle: toggleMenu,
  isActive
});
</script>

<template>
  <button class="nav-burger" :class="{ 'nav-burger--active': isActive }" @click="toggleMenu">
    <span class="nav-burger__line nav-burger__line--1"></span>
    <span class="nav-burger__line nav-burger__line--2"></span>
    <span class="nav-burger__line nav-burger__line--3"></span>
  </button>
</template>

<style scoped lang="scss">
.nav-burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: none;
  cursor: pointer;
  background: none;
  position: relative;

  width: 32px;
  height: 24px;  
  padding: 0;
  gap: 4px;
  
  &__line {
    background-color: $color-text-main;

    height: 4px;
    border-radius: 1px;
    transform-origin: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &--1 {
      width: 50%;
    }

    &--2 {
      width: 75%;
    }

    &--3 {
      width: 100%;
    }
  }

  &:hover:not(.nav-burger--active) {
    .nav-burger__line {
      &--1 {
        width: 100%;
      }

      &--2 {
        width: 75%;
      }

      &--3 {
        width: 50%;
      }
    }
  }

  &--active {
    .nav-burger__line {
      background-color: $color-text-contrast;

      &--1 {
        width: 100%;
        transform: translateY(6px) rotate(45deg);
      }

      &--2 {
        width: 100%;
        opacity: 0;
        transform: scaleX(0);
      }

      &--3 {
        width: 100%;
        transform: translateY(-6px) rotate(-45deg);
      }
    }
  }
}
</style>