<script setup lang="ts">
import ViewSection from '@/components/view/ViewSection.vue'

import BaseTextCard from '@/components/ui/BaseTextCard.vue'

import type { ContentPage } from '@/contents'

defineProps<{
  content: ContentPage['openSource']
}>()
</script>

<template>
  <ViewSection :title="content.title" :eyebrow="content.eyebrow" :number="content.number">
    <div class="content-view__open-source-prj-grid">
      <BaseTextCard v-for="(item, index) in content.projects" :key="index" v-bind="item" />
    </div>
  </ViewSection>
</template>
