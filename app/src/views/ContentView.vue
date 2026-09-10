<script setup lang="ts">
import BaseView from '@/components/view/BaseView.vue'
import ContentCommerce from '@/components/view/ContentCommerce.vue'
import ContentContact from '@/components/view/ContentContact.vue'
import ContentHero from '@/components/view/ContentHero.vue'
import ContentOpenSource from '@/components/view/ContentOpenSource.vue'
import ContentPractice from '@/components/view/ContentPractice.vue'
import { siteContent } from '@/contents'
</script>

<template>
  <BaseView class="content-view">
    <ContentHero :content="siteContent.pages.content.hero" />
    <ContentPractice :content="siteContent.pages.content.practice" />
    <ContentCommerce :content="siteContent.pages.content.commerce" />
    <ContentOpenSource :content="siteContent.pages.content.openSource" />
    <ContentContact
      :content="siteContent.pages.content.contact"
      :profiles="siteContent.socialProfiles"
    />
  </BaseView>
</template>
