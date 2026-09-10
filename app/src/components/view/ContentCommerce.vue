<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SectionRail from '@/components/ui/SectionRail.vue'
import { padIndex } from '@/utils/format'
import type { ContentPage } from '@/contents'

const props = defineProps<{ content: ContentPage['commerce'] }>()

const titleId = `commerce-${useId()}`

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
</script>

<template>
  <section class="content-commerce o-poster" :aria-labelledby="titleId">
    <div class="o-poster__sheet">
      <SectionHeading :id="titleId" :lines="content.headline" />

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
              {{ padIndex(index) }}
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

    <SectionRail :index="content.index" :label="content.label" />
  </section>
</template>
