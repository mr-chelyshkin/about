<script setup lang="ts">
import ContentCareerTimeline from '@/components/view/ContentCareerTimeline.vue'
import BaseTextNote from '@/components/ui/BaseTextNote.vue'
import BaseKeyValueList from '@/components/ui/BaseKeyValueList.vue'
import ViewSection from '@/components/view/ViewSection.vue'

import type { ContentPage } from '@/contents'

defineProps<{
  content: ContentPage['expertise']
}>()
</script>

<template>
  <ViewSection :title="content.title" :eyebrow="content.eyebrow" :number="content.number">
    <BaseTextNote
      class="content-view__expertise-note-margin"
      :header="content.philosophy.header"
      :content="content.philosophy.content"
    />
    <div class="content-view__expertise">
      <div class="content-view__expertise-layout">
        <div class="content-view__expertise-list">
          <BaseKeyValueList
            v-for="section in content.skills"
            :key="section.number"
            :number="section.number"
            :title="section.title"
            :data="section.data"
          />
        </div>
        <div class="content-view__expertise-sidebar">
          <ContentCareerTimeline :items="content.career" :title="content.careerTitle" />
        </div>
      </div>
    </div>
  </ViewSection>
</template>
