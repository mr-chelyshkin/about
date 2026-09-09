<script setup lang="ts">
import BaseView from '@/components/view/BaseView.vue'
import ContentHero from '@/components/view/ContentHero.vue'
import { siteContent } from '@/contents'
import content from '@/contents/homepage.json'

const hero = {
  ...siteContent.pages.content.hero,
  name: content.name,
  title: content.role,
  description: content.hero.description,
  tagline: content.hero.title.replace('\n', ' '),
  techStack: ['Go', 'Python', 'Rust'],
  linksTitle: content.engagement.format,
  imageAlt: content.name,
  links: [
    { label: content.hero.primary, href: content.contact.href },
    { label: content.hero.secondary, href: content.contact.github },
  ],
}
</script>

<template>
  <BaseView class="content-view">
    <ContentHero :content="hero" />
  </BaseView>
</template>
