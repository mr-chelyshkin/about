<script setup lang="ts">
import BaseView from '@/components/view/BaseView.vue'
import ContentHero from '@/components/view/ContentHero.vue'
import ContentExpertise from '@/components/view/ContentExpertise.vue'
import ContentSolutions from '@/components/view/ContentSolutions.vue'
import ContentOpenSource from '@/components/view/ContentOpenSource.vue'
import { siteContent } from '@/contents'

const pageContent = siteContent.pages.content
</script>

<template>
  <BaseView class="content-view">
    <ContentHero :content="pageContent.hero" />
    <ContentExpertise :content="pageContent.expertise" />
    <ContentSolutions :content="pageContent.solutions" />
    <ContentOpenSource :content="pageContent.openSource" />
  </BaseView>
</template>
