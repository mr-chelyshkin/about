<script setup lang="ts">
import { useId } from 'vue'
import BaseSignalText from '@/components/ui/BaseSignalText.vue'
import { useGlitch } from '@/composables/useGlitch'
import type { ContentPage } from '@/contents'

defineProps<{ content: ContentPage['practice'] }>()

const titleId = `practice-${useId()}`
const { isGlitching, trigger, glitchClass } = useGlitch()
</script>

<template>
  <section class="content-practice" :aria-labelledby="titleId">
    <div class="content-practice__sheet">
      <div class="content-practice__lede">
        <h2 :id="titleId" class="content-practice__title">
          <BaseSignalText
            v-for="line in content.headline"
            :key="line"
            :text="line"
            class="content-practice__title-line"
          />
        </h2>
        <p class="content-practice__lead">{{ content.description }}</p>
      </div>

      <ol class="content-practice__stack">
        <li v-for="area in content.areas" :key="area.title" class="content-practice__layer">
          <h3 class="content-practice__layer-name">{{ area.title }}</h3>
          <div class="content-practice__layer-copy">
            <p class="content-practice__layer-caption">{{ area.caption }}</p>
            <p class="content-practice__layer-description">{{ area.description }}</p>
          </div>
        </li>
      </ol>
    </div>

    <p class="content-practice__rail">
      <span class="content-practice__rail-text" @mouseenter="trigger">
        <!-- The glitch sits inside the rotation, as it does in the hero rail, so
             its shift follows the same axis in both places. -->
        <span class="content-practice__rail-label" :class="{ [glitchClass]: isGlitching }">
          <span>{{ content.index }}</span>
          <span>{{ content.label }}</span>
        </span>
      </span>
    </p>
  </section>
</template>
