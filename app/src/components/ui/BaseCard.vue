<script setup lang="ts">
interface Props {
  href?: string
}
defineProps<Props>()
</script>

<template>
  <a v-bind="href === undefined ? {} : { href }" class="c-card">
    <slot />
  </a>
</template>
