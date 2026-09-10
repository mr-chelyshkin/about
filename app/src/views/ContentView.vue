<script setup lang="ts">
import BaseView from '@/components/view/BaseView.vue'
import ContentHero from '@/components/view/ContentHero.vue'
import ContentPractice from '@/components/view/ContentPractice.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <BaseView class="content-view">
    <ContentHero :content="siteContent.pages.content.hero" />
    <ContentPractice :content="siteContent.pages.content.practice" />
  </BaseView>
</template>
