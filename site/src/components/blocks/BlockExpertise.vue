<script setup lang="ts">
import ContentCareerTimeline from '@/components/content/ContentCareerTimeline.vue'
import ItemNoteText from '@/components/items/ItemNoteText.vue'
import ItemListKV from '@/components/items/ItemListKV.vue'
import BaseBlock from '@/components/base/BaseBlock.vue'

import { philosophy } from '@/data/expertise/philosophy'
import { skills } from '@/data/expertise/skills'
import { career } from '@/data/expertise/career'

defineProps<{
  title: string
  subtitle: string
  blockNumber: string
}>()
</script>

<template>
  <BaseBlock :title="title" :subtitle="subtitle" :number="blockNumber">
    <ItemNoteText :class="$style.noteMargin" :header="philosophy.header" :content="philosophy.content" />
    <div :class="$style.blockExpertise">
      <div :class="$style.blockExpertiseLayout">
        <div :class="$style.blockExpertiseList">
          <ItemListKV
            v-for="section in skills"
            :key="section.number"
            :number="section.number"
            :title="section.title"
            :data="section.data"
          />
        </div>
        <div :class="$style.blockExpertiseSidebar">
          <ContentCareerTimeline :items="career" />
        </div>
      </div>
    </div>
  </BaseBlock>
</template>

<style module lang="scss">
.noteMargin {
  margin-top: 3rem;
}

.blockExpertise {
  justify-content: center;
  display: flex;
  margin-bottom: 3rem;
  padding: 3rem 0;
}

.blockExpertiseLayout {
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

.blockExpertiseList {
  flex: 1;
}

.blockExpertiseSidebar {
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
</style>