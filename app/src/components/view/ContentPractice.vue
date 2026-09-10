<script setup lang="ts">
import { useId } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SectionRail from '@/components/ui/SectionRail.vue'
import type { ContentPage } from '@/contents'

defineProps<{ content: ContentPage['practice'] }>()

const titleId = `practice-${useId()}`
</script>

<template>
  <section class="content-practice o-poster" :aria-labelledby="titleId">
    <div class="o-poster__sheet">
      <div class="o-poster__split">
        <SectionHeading :id="titleId" :lines="content.headline" />
        <p class="o-poster__aside">{{ content.description }}</p>
      </div>

      <ol class="content-practice__stack">
        <li
          v-for="area in content.areas"
          :key="area.title"
          class="content-practice__layer o-poster__split"
        >
          <h3 class="content-practice__layer-name">{{ area.title }}</h3>
          <div class="content-practice__layer-copy">
            <p class="content-practice__layer-caption">{{ area.caption }}</p>
            <p class="content-practice__layer-description">{{ area.description }}</p>
          </div>
        </li>
      </ol>
    </div>

    <SectionRail :index="content.index" :label="content.label" />
  </section>
</template>
