<script setup lang="ts">
import { useId } from 'vue'
import SectionBand from '@/components/ui/SectionBand.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { ContentPage } from '@/contents'
import type { SocialProfiles } from '@/types/ui'

defineProps<{
  content: ContentPage['contact']
  profiles: SocialProfiles
}>()

const titleId = `contact-${useId()}`
</script>

<template>
  <!-- Outside the numbered index: no rail, no number, its own surface. The page
       stops describing work here and asks for a reply instead. -->
  <section class="content-contact o-poster o-poster--open" :aria-labelledby="titleId">
    <SectionBand :label="content.label" />

    <div class="o-poster__sheet">
      <div class="o-poster__split">
        <SectionHeading :id="titleId" :lines="content.headline" />
        <p class="o-poster__aside content-contact__lead">{{ content.description }}</p>
      </div>

      <div class="content-contact__reply">
        <a class="content-contact__email" :href="content.email.href">
          {{ content.email.label }}
        </a>

        <ul class="content-contact__links">
          <li v-for="profile in profiles" :key="profile.href">
            <a
              class="content-contact__link"
              :href="profile.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${profile.label} (opens in a new tab)`"
            >
              {{ profile.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
