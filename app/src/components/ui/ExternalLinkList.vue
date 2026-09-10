<script setup lang="ts">
defineProps<{
  links: readonly { href: string; label: string }[]
  labelPrefix?: string
}>()
</script>

<template>
  <ul class="c-external-link-list">
    <li v-for="link in links" :key="link.href">
      <a
        class="c-external-link-list__link"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${labelPrefix ? `${labelPrefix} ` : ''}${link.label} (opens in a new tab)`"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>
