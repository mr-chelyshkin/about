<script setup lang="ts">
import BaseTextCard from '@/components/ui/BaseTextCard.vue'
import ContentAchievementTimeline from '@/components/view/ContentAchievementTimeline.vue'
import ViewSection from '@/components/view/ViewSection.vue'

import type { ContentPage } from '@/contents'

defineProps<{
  content: ContentPage['solutions']
}>()
</script>

<template>
  <ViewSection :title="content.title" :eyebrow="content.eyebrow" :number="content.number">
    <h4 class="content-view__solutions-section-title">{{ content.projectsTitle }}</h4>
    <div class="content-view__solutions-prj-grid">
      <BaseTextCard v-for="(item, index) in content.projects" :key="index" v-bind="item" />
    </div>

    <h4 class="content-view__solutions-section-title">{{ content.achievementsTitle }}</h4>
    <div class="content-view__solutions-ach-grid">
      <ContentAchievementTimeline :items="content.achievements" />
    </div>
  </ViewSection>
</template>
