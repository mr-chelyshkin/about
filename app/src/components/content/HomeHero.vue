<script setup lang="ts">
import { ArrowDown, ArrowUpRight } from '@lucide/vue'

import { siteContent } from '@/contents'
</script>

<template>
  <section class="hero o-container" aria-labelledby="hero-title">
    <div class="hero__copy">
      <p class="c-eyebrow">{{ siteContent.hero.eyebrow }}</p>
      <h1 id="hero-title" class="hero__title c-glitch-text" :data-text="siteContent.hero.title">
        {{ siteContent.hero.title }}
      </h1>
      <p class="hero__description">{{ siteContent.hero.description }}</p>
      <div class="hero__actions">
        <a
          class="c-button c-button--primary"
          :href="siteContent.links.contact"
          target="_blank"
          rel="noreferrer"
        >
          {{ siteContent.hero.primaryAction }} <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
        <a class="c-button c-button--ghost" :href="siteContent.links.work">
          {{ siteContent.hero.secondaryAction }} <ArrowDown :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div
      class="hero__signal c-signal-frame"
      aria-label="Profile signal: platform engineering, cloud, on-premises, bare metal"
    >
      <div class="hero__signal-head">
        <span>PROFILE.SYS</span>
        <span class="hero__signal-status">LIVE</span>
      </div>
      <div class="hero__signal-field" aria-hidden="true">
        <span class="hero__signal-index">01</span>
        <strong>BUILD</strong>
        <span>PLATFORMS</span>
        <span>RUNTIMES</span>
        <span>DELIVERY</span>
      </div>
      <dl class="hero__signal-data">
        <div><dt>MODE</dt><dd>DESIGN / BUILD</dd></div>
        <div><dt>SCOPE</dt><dd>CLOUD / ON-PREM / METAL</dd></div>
        <div><dt>FOCUS</dt><dd>SELF-SERVICE SYSTEMS</dd></div>
      </dl>
    </div>
  </section>
</template>
