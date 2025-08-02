<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const emit = defineEmits<{ toggle: [isActive: boolean] }>()
const toggleMenu = () => {
  isActive.value = !isActive.value
  emit('toggle', isActive.value)
}

defineExpose({
  toggle: toggleMenu,
  isActive,
})
</script>

<template>
  <button 
    :class="[$style.navBurger, { [$style.navBurgerActive]: isActive }]" 
    @click="toggleMenu"
    :aria-label="isActive ? 'open menu' : 'close menu'"
    :aria-expanded="isActive"
    aria-controls="navigation-menu"
  >
    <span :class="[$style.navBurgerLine, $style.navBurgerLine1]"></span>
    <span :class="[$style.navBurgerLine, $style.navBurgerLine2]"></span>
    <span :class="[$style.navBurgerLine, $style.navBurgerLine3]"></span>
  </button>
</template>

<style module lang="scss">
.navBurger {
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
}

.navBurgerLine {
  background-color: $color-text-main;
  height: 4px;
  border-radius: 1px;
  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navBurgerLine1 {
  width: 50%;
}

.navBurgerLine2 {
  width: 75%;
}

.navBurgerLine3 {
  width: 100%;
}

// Hover состояние для неактивного бургера
.navBurger:hover:not(.navBurgerActive) {
  .navBurgerLine1 {
    width: 100%;
  }

  .navBurgerLine2 {
    width: 75%;
  }

  .navBurgerLine3 {
    width: 50%;
  }
}

// Активное состояние
.navBurgerActive {
  .navBurgerLine {
    background-color: $color-text-contrast;
  }

  .navBurgerLine1 {
    width: 100%;
    transform: translateY(6px) rotate(45deg);
  }

  .navBurgerLine2 {
    width: 100%;
    opacity: 0;
    transform: scaleX(0);
  }

  .navBurgerLine3 {
    width: 100%;
    transform: translateY(-6px) rotate(-45deg);
  }
}
</style>
