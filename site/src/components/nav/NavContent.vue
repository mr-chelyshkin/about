<script setup lang="ts">
import ItemMatrixLink from '@/components/items/ItemMatrixLink.vue'

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
    <div v-if="isOpen" :class="$style.navOverlay" @click="closeMenu"></div>
    <nav :class="[$style.navMenu, { [$style.navMenuOpen]: isOpen }]">
      <div :class="$style.navMenuContent">
        <ul :class="$style.navMenuList">
          <li :class="$style.navMenuItem">
            <ItemMatrixLink to="/" @click="closeMenu">Home</ItemMatrixLink>
          </li>
        </ul>
      </div>
    </nav>
  </Teleport>
</template>

<style module lang="scss">
.navOverlay {
  z-index: $z-index-nav-overlay;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.navMenu {
  --nav-content-width: 280px;
  background: $color-background-contrast;
  min-width: var(--nav-content-width);
  padding-top: $header-height;
  z-index: $z-index-nav-menu;
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: calc(576px + max(0px, (100vw - $max-width) * 0.3));
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);

  @media (max-width: 768px) {
    width: 75%;
    min-width: unset;
  }
}

.navMenuOpen {
  transform: translateX(0);
}

.navMenuContent {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
}

.navMenuList {
  width: var(--nav-content-width);
  list-style: none;
  margin: 0;
  padding: 0;
}

.navMenuItem {
  margin-bottom: 0.5rem;
  text-align: right;
}
</style>