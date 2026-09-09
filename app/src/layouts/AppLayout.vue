<script setup lang="ts">
import SiteFooter from '@/components/chrome/SiteFooter.vue'
import SiteHeader from '@/components/chrome/SiteHeader.vue'
</script>

<template>
  <div class="app-layout">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
