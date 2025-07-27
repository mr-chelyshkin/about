<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="nav-overlay"
      @click="closeMenu"
    ></div>

    <nav 
      class="nav-menu" 
      :class="{ 'nav-menu--open': isOpen }"
    >
      <div class="nav-menu__content">
        <ul class="nav-menu__list">
          <li class="nav-menu__item">
            <router-link 
              to="/" 
              class="nav-menu__link"
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
}>()
const closeMenu = () => {
  emit('close');
}
</script>

<style scoped lang="scss">
.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  backdrop-filter: blur(2px);
}

.nav-menu {
  background: $color-background-contrast;
  padding-top: $header-height;

  display: flex;
  flex-direction: column;

  top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  height: 100vh;
  min-width: 280px;
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
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &__item {
    margin-bottom: 0.5rem;
    text-align: right;
  }

  &__link {
    display: block;
    padding: 1rem 0;
    color: $color-text-contrast;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
    text-align: right;

    &:hover {
      text-decoration: line-through;
      padding-right: 0.5rem;
    }

    &.router-link-active {
      color: $color-text-contrast;
      font-weight: 600;
    }
  }
}
</style>