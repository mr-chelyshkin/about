<script setup lang="ts">
import { siteContent } from '@/contents'
</script>

<template>
  <footer class="site-footer">
    <div class="o-container site-footer__inner">
      <div class="site-footer__identity">
        <strong>{{ siteContent.person.name }}</strong>
        <span>{{ siteContent.footer.descriptor }}</span>
      </div>
      <p>{{ siteContent.footer.note }}</p>
      <nav class="site-footer__links" :aria-label="siteContent.accessibility.footerNavigation">
        <a href="/">Home</a>
        <a href="/styleguide/">Style guide</a>
        <a :href="siteContent.links.source" target="_blank" rel="noreferrer">Source ↗</a>
      </nav>
    </div>
  </footer>
</template>
