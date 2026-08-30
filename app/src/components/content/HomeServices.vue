<script setup lang="ts">
import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <section id="services" class="home-section home-services" aria-labelledby="services-title">
    <div class="o-container">
      <SectionIntro
        :eyebrow="siteContent.services.eyebrow"
        :title="siteContent.services.title"
        title-id="services-title"
        :description="siteContent.services.description"
      />
      <div class="services-grid">
        <article v-for="item in siteContent.services.items" :key="item.number" class="service-card">
          <span class="service-card__number">{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
