<script setup lang="ts">
interface Props {
  header: string
}
const props = defineProps<Props>()
const headerText = `// ${props.header}`
</script>

<template>
  <div class="c-note">
    <div class="c-note__header">{{ headerText }}</div>
    <slot />
  </div>
</template>
