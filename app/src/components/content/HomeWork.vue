<script setup lang="ts">
import SectionIntro from '@/components/content/SectionIntro.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <section id="work" class="home-section home-work" aria-labelledby="work-title">
    <div class="o-container">
      <SectionIntro
        :eyebrow="siteContent.work.eyebrow"
        :title="siteContent.work.title"
        title-id="work-title"
        :description="siteContent.work.description"
      />
      <div class="work-list">
        <article v-for="item in siteContent.work.items" :key="item.number" class="work-card">
          <header class="work-card__header">
            <span>{{ item.number }}</span>
            <h3>{{ item.title }}</h3>
          </header>
          <dl class="work-card__flow">
            <div><dt>Constraint</dt><dd>{{ item.challenge }}</dd></div>
            <div><dt>System</dt><dd>{{ item.response }}</dd></div>
            <div class="work-card__outcome"><dt>Outcome</dt><dd>{{ item.outcome }}</dd></div>
          </dl>
        </article>
      </div>
    </div>
  </section>
</template>
