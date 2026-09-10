<script setup lang="ts">
import { useId } from 'vue'
import BaseImage from '@/components/ui/BaseImage.vue'
import { useGlitch } from '@/composables/useGlitch'
import type { ContentPage } from '@/contents'

defineProps<{
  content: ContentPage['hero']
}>()

const signalFilterId = `hero-signal-${useId()}`
// In tall frames, cover scales the landscape image to the hero's height.
const imageSizes = '(min-aspect-ratio: 16/9) 100vw, 178vh'
const { isGlitching, trigger, glitchClass } = useGlitch({
  animation: 'c-glitch-digital',
  duration: 400,
})

const tears = [
  { top: '16%', bottom: '82%', shift: '-2.5%' },
  { top: '38%', bottom: '57%', shift: '4%' },
  { top: '59%', bottom: '33%', shift: '-5%' },
  { top: '84%', bottom: '14%', shift: '3%' },
]
</script>

<template>
  <section class="content-view__hero" aria-labelledby="hero-title">
    <svg class="content-view__hero-filters" aria-hidden="true" focusable="false">
      <defs>
        <filter
          :id="signalFilterId"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          primitiveUnits="objectBoundingBox"
          color-interpolation-filters="sRGB"
        >
          <feComponentTransfer in="SourceGraphic" result="contrast">
            <feFuncR type="linear" slope="1.28" intercept="-0.16" />
            <feFuncG type="linear" slope="1.28" intercept="-0.16" />
            <feFuncB type="linear" slope="1.28" intercept="-0.16" />
          </feComponentTransfer>
          <feColorMatrix
            in="contrast"
            type="matrix"
            values="0.0733 0.2467 0.0249 0 0
                    0.1541 0.5185 0.0523 0 0
                    0.1601 0.5385 0.0544 0 0
                    0 0 0 1 0"
            result="cool"
          />
          <feOffset in="cool" dx="-0.022" result="cool-shift" />
          <feColorMatrix
            in="contrast"
            type="matrix"
            values="0.1786 0.6008 0.0606 0 0
                    0.1169 0.3934 0.0397 0 0
                    0.0829 0.2789 0.0282 0 0
                    0 0 0 1 0"
            result="warm"
          />
          <feOffset in="warm" dx="0.016" result="warm-shift" />
          <feBlend in="cool-shift" in2="warm-shift" mode="screen" />
        </filter>
      </defs>
    </svg>

    <div class="content-view__hero-image">
      <div class="content-view__hero-exposure" :style="{ filter: `url(#${signalFilterId})` }">
        <BaseImage
          class="content-view__hero-photo"
          :src="content.image"
          :alt="content.imageAlt"
          :width="1600"
          :asset-width="1600"
          :height="900"
          :sizes="imageSizes"
          :priority="true"
        />
        <div
          v-for="tear in tears"
          :key="tear.top"
          class="content-view__hero-tear"
          :style="{
            '--tear-top': tear.top,
            '--tear-bottom': tear.bottom,
            '--tear-shift': tear.shift,
          }"
          aria-hidden="true"
        >
          <BaseImage
            :src="content.image"
            alt=""
            :width="1600"
            :asset-width="1600"
            :height="900"
            :sizes="imageSizes"
            :priority="true"
          />
        </div>
      </div>
      <div class="content-view__hero-signal" aria-hidden="true">
        <span v-for="block in 5" :key="block" class="content-view__hero-signal-block" />
      </div>
      <BaseImage
        class="content-view__hero-face"
        :src="content.image"
        alt=""
        aria-hidden="true"
        :width="1600"
        :asset-width="1600"
        :height="900"
        :sizes="imageSizes"
        :priority="true"
      />
    </div>

    <h1 id="hero-title" class="content-view__hero-title" :aria-label="content.title">
      <span class="content-view__hero-headline" aria-hidden="true">
        <span v-for="line in content.headline" :key="line" class="content-view__hero-line">
          {{ line }}
        </span>
      </span>
      <span class="content-view__hero-discipline" aria-hidden="true">
        <span @mouseenter="trigger">
          <span class="content-view__hero-discipline-text" :class="{ [glitchClass]: isGlitching }">
            {{ content.discipline }}
          </span>
        </span>
      </span>
    </h1>
  </section>
</template>
