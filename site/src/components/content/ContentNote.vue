<script setup lang="ts">
interface Props {
  header: string;
  content: string;
}

defineProps<Props>();
</script>

<template>
  <div class="content-note">
    <div class="note-header">{{ header }}</div>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
.content-note {
  background: $color-white;
  padding: 2rem;
  border: 2px solid $color-text-main;
  margin: 2rem 0;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30px;
    height: 30px;
    background: $color-text-main;
    transition: all 0.4s ease;
  }
  
  &:hover {
    padding: 2rem 2rem 2rem 3rem;
    
    &::before {
      width: 50px;
      height: 50px;
      transform: rotate(45deg);
    }
    
    .note-header {
      transform: translateX(10px);
    }
    
    p {
      transform: translateX(5px);
    }
  }
  
  .note-header {
    font-family: 'Roboto Mono', monospace;
    font-size: $text-size-sm;
    color: $color-text-main;
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  
  p {
    color: $color-text-main;
    line-height: 1.6;
    font-size: 1.1rem;
    margin: 0;
    transition: all 0.3s ease;
  }
}
</style>