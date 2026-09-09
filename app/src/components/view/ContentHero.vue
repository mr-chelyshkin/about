<script setup lang="ts">
import BaseDigitalImage from '@/components/ui/BaseDigitalImage.vue'
import BaseContainer from '@/components/layout/BaseContainer.vue'

import type { ContentPage } from '@/contents'

interface Props {
  content: ContentPage['hero']
}
defineProps<Props>()
</script>

<template>
  <BaseContainer>
    <div
      class="content-view__hero"
      :data-block-title="content.eyebrow"
      :data-block-number="content.number"
    >
      <div class="content-view__hero-background-image">
        <BaseDigitalImage
          :alt="content.imageAlt"
          format="webp"
          :src="content.image"
          folder=""
          :pulse="true"
          :glitch="true"
          :width="1200"
          :priority="true"
        />
      </div>
      <div class="content-view__hero-content">
        <h1>{{ content.name }}</h1>
        <h2 class="content-view__hero-content-subtitle">{{ content.title }}</h2>
        <p>
          {{ content.description }}
          <br /><br />
          <span class="content-view__hero-tech-stack">
            <span
              v-for="(tech, index) in content.techStack"
              :key="index"
              class="content-view__hero-tech-item"
            >
              {{ tech }}
            </span>
          </span>
        </p>
        <br />
        <div>
          {{ content.tagline }}
        </div>
        <h3 class="content-view__hero-content-links-title">{{ content.linksTitle }}</h3>
        <div class="content-view__hero-links">
          <a v-for="(link, index) in content.links" :key="index" :href="link.href" target="_blank">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
