<script setup lang="ts">
import { watch } from 'vue';
import { useGlitch } from '@/composables/useGlitch';

interface Props {
  title: string;
  number: string;
}
const props = defineProps<Props>();

const { isGlitching, trigger, glitchClass } = useGlitch({
  animation: 'glitch-digital',
  duration: 400
});

let isInitialized = false;
watch([() => props.title, () => props.number], () => {
  if (isInitialized) {
    trigger();
  }
  isInitialized = true;
});
</script>

<template>
  <div class="content-anchor">
    <span 
      class="content-anchor__title" 
      :class="{ [glitchClass]: isGlitching }"
    >
      {{ title }}
    </span>
    <span 
      class="content-anchor__number" 
      :class="{ [glitchClass]: isGlitching }"
    >
      {{ number }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.content-anchor {
  display: flex;
  gap: 0.3rem;

  &__title {
    font-weight: 600;
    position: relative;
  }

  &__number {
    font-weight: 300;
    position: relative;
  }
}
</style>