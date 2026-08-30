<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

import { siteContent } from '@/contents'
</script>

<template>
  <section class="home-contact">
    <div class="o-container home-contact__inner">
      <p class="c-eyebrow">{{ siteContent.contact.eyebrow }}</p>
      <h2 class="home-contact__title c-glitch-text" :data-text="siteContent.contact.title">
        {{ siteContent.contact.title }}
      </h2>
      <p>{{ siteContent.contact.description }}</p>
      <div class="home-contact__actions">
        <a
          class="c-button c-button--primary"
          :href="siteContent.links.contact"
          target="_blank"
          rel="noreferrer"
        >
          {{ siteContent.contact.primaryAction }} <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
        <a
          class="c-button c-button--ghost"
          :href="siteContent.links.linkedin"
          target="_blank"
          rel="noreferrer"
        >
          {{ siteContent.contact.secondaryAction }} <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
