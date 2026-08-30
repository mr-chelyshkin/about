<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <section class="home-section home-open-source" aria-labelledby="opensource-title">
    <div class="o-container">
      <SectionIntro
        :eyebrow="siteContent.openSource.eyebrow"
        :title="siteContent.openSource.title"
        title-id="opensource-title"
      />
      <div class="open-source-list">
        <a
          v-for="(item, index) in siteContent.openSource.items"
          :key="item.name"
          class="open-source-item"
          :href="item.url"
          target="_blank"
          rel="noreferrer"
        >
          <span class="open-source-item__index">0{{ index + 1 }}</span>
          <span class="open-source-item__name">{{ item.name }}</span>
          <span class="open-source-item__description">{{ item.description }}</span>
          <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
