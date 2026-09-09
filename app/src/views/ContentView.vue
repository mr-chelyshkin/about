<script setup lang="ts">
import BaseView from '@/components/view/BaseView.vue'
import ContentHero from '@/components/view/ContentHero.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <BaseView class="content-view">
    <ContentHero :content="siteContent.pages.content.hero" />
  </BaseView>
</template>
