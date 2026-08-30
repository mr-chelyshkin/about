<script setup lang="ts">
import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <section class="home-section home-proof" aria-labelledby="proof-title">
    <div class="o-container">
      <SectionIntro
        :eyebrow="siteContent.proof.eyebrow"
        :title="siteContent.proof.title"
        title-id="proof-title"
        :description="siteContent.proof.description"
      />
      <div class="proof-grid">
        <article v-for="item in siteContent.proof.items" :key="item.label" class="proof-card">
          <strong>{{ item.value }}</strong>
          <p>{{ item.label }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
