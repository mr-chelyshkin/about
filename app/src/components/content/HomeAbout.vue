<script setup lang="ts">
import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <section id="about" class="home-section home-about" aria-labelledby="about-title">
    <div class="o-container home-about__layout">
      <SectionIntro
        :eyebrow="siteContent.about.eyebrow"
        :title="siteContent.about.title"
        title-id="about-title"
        :description="siteContent.about.description"
        compact
      />
      <ol class="timeline">
        <li v-for="item in siteContent.about.timeline" :key="item.year" class="timeline__item">
          <time :datetime="item.year">{{ item.year }}</time>
          <div>
            <h3>{{ item.role }}</h3>
            <p>{{ item.company }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
