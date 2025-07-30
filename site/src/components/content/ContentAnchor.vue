<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  title: string;
  number: string;
}
const prevTitle = ref('');
const prevNumber = ref('');
const isChanging = ref(false);
const props = defineProps<Props>();

watch([() => props.title, () => props.number], () => {
  if (prevTitle.value !== '' && prevNumber.value !== '') {
    isChanging.value = true;
    setTimeout(() => { isChanging.value = false; }, 400);
  }
  prevNumber.value = props.number;
  prevTitle.value = props.title;
});
</script>

<template>
  <div class="content-anchor">
    <span class="content-anchor__title" :class="{ 'glitch-digital': isChanging }">
      {{ title }}
    </span>
    <span class="content-anchor__number" :class="{ 'glitch-digital': isChanging }">
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