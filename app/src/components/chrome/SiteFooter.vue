<script setup lang="ts">
import BaseContainer from '@/components/layout/BaseContainer.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <footer class="site-footer">
    <BaseContainer>
      &copy; {{ new Date().getFullYear() }} {{ siteContent.brand.name }} —
      {{ siteContent.footer.notice }}
    </BaseContainer>
  </footer>
</template>
