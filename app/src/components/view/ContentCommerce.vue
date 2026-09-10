<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import BaseSignalText from '@/components/ui/BaseSignalText.vue'
import { useGlitch } from '@/composables/useGlitch'
import type { ContentPage } from '@/contents'

const props = defineProps<{ content: ContentPage['commerce'] }>()

const titleId = `commerce-${useId()}`
const { isGlitching, trigger, glitchClass } = useGlitch()

// The readout follows pointer and keyboard alike; with nothing selected it
// carries the section's own lede.
const activeIndex = ref<number | null>(null)
const activeCompany = computed(() =>
  activeIndex.value === null ? null : props.content.companies[activeIndex.value],
)

const select = (index: number) => {
  activeIndex.value = index
}

const clear = () => {
  activeIndex.value = null
}

const entryIndex = (index: number) => String(index + 1).padStart(2, '0')
</script>

<template>
  <section class="content-commerce" :aria-labelledby="titleId">
    <div class="content-commerce__sheet">
      <div class="content-commerce__lede">
        <h2 :id="titleId" class="content-commerce__title">
          <BaseSignalText
            v-for="line in content.headline"
            :key="line"
            :text="line"
            class="content-commerce__title-line"
          />
        </h2>
      </div>

      <ul
        class="content-commerce__wall"
        :class="{ 'content-commerce__wall--tuned': activeIndex !== null }"
      >
        <li v-for="(company, index) in content.companies" :key="company.name">
          <button
            type="button"
            class="content-commerce__entry"
            :class="{ 'content-commerce__entry--active': activeIndex === index }"
            @mouseenter="select(index)"
            @focus="select(index)"
            @mouseleave="clear"
            @blur="clear"
          >
            <span class="content-commerce__entry-index" aria-hidden="true">
              {{ entryIndex(index) }}
            </span>
            <span class="content-commerce__entry-name">{{ company.name }}</span>
          </button>
        </li>
      </ul>

      <p class="content-commerce__readout" aria-live="polite">
        <span class="content-commerce__readout-meta">
          {{ activeCompany ? activeCompany.meta : content.hint }}
        </span>
        <span class="content-commerce__readout-note">
          {{ activeCompany ? activeCompany.note : content.description }}
        </span>
      </p>
    </div>

    <p class="content-commerce__rail">
      <span class="content-commerce__rail-text" @mouseenter="trigger">
        <!-- The glitch sits inside the rotation, as it does in the hero rail, so
             its shift follows the same axis in both places. -->
        <span class="content-commerce__rail-label" :class="{ [glitchClass]: isGlitching }">
          <span>{{ content.index }}</span>
          <span>{{ content.label }}</span>
        </span>
      </span>
    </p>
  </section>
</template>
