<script setup lang="ts">
import BaseLink from '@/components/base/BaseLink.vue';

interface Props {
  to: string;
}
let globalIndex = 0;
const autoIndex = globalIndex++;

defineProps<Props>();
defineEmits<{ click: []; }>();
</script>

<template>
  <BaseLink :to="to" :index="autoIndex" animation="glitch-matrix" :duration="400" @click="$emit('click')">
    <slot />
  </BaseLink>
</template>