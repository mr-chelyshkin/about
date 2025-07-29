<script setup lang="ts">
import ContentCareerTimeline from '@/components/content/ContentCareerTimeline.vue';
import ItemNoteText from '@/components/items/ItemNoteText.vue';
import ItemListKV from '@/components/items/ItemListKV.vue';
import BaseBlock from '@/components/base/BaseBlock.vue';

import { philosophy } from '@/data/expertise/philosophy';
import { skills } from '@/data/expertise/skills';
import { career } from '@/data/expertise/career';

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>();
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <ItemNoteText class="note-margin" :header="philosophy.header" :content="philosophy.content" />
    <div class="block-expertise">
      <div class="block-expertise__layout">
        <div class="block-expertise__list">
          <ItemListKV v-for="section in skills"
            :key="section.number"
            :number="section.number"
            :title="section.title"
            :data="section.data"
          />
        </div>
        <div class="block-expertise__sidebar">
          <ContentCareerTimeline :items="career" />
        </div>
      </div>
    </div>
  </BaseBlock>
</template>

<style scoped lang="scss">
.note-margin {
  margin-top: 3rem;
}

.block-expertise {
  justify-content: center;
  display: flex;
  margin-bottom: 3rem;
  padding: 3rem 0;

  &__layout {
    display: flex;
    gap: 4rem;

    @media (max-width: 1200px) {
      gap: 3rem;
    }

    @media (max-width: 968px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__list {
    flex: 1;
  }

  &__sidebar {
    height: fit-content;
    position: sticky;
    top: 5rem;

    @media (max-width: 1200px) {
      flex: 0 0 300px;
    }

    @media (max-width: 968px) {
      position: static;
      flex: none;
    }
  }
}
</style>