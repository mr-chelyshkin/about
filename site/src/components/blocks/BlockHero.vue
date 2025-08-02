<script setup lang="ts">
import ItemDigitalImage from '@/components/items/ItemDigitalImage.vue'

import { heroData } from '@/data/hero/data'

interface Props {
  title?: string
  number?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="container">
    <div
      :class="$style.blockHero"
      :data-block-title="props.title"
      :data-block-number="props.number"
    >
      <div :class="$style.blockHeroBackgroundImage">
        <ItemDigitalImage 
          alt="Igor Chelyshkin - Platform Engineer" 
          format="webp"
          src="hero"
          folder=""
      
          :pulse="true" 
          :glitch="true"
          :width="1200"
          :priority="true"
        />
      </div>
      <div :class="$style.blockHeroContent">
        <h1>{{ heroData.name }}</h1>
        <h2 :class="$style.contentSubtitle">{{ heroData.title }}</h2>
        <p>
          {{ heroData.description }}
          <br /><br />
          <span :class="$style.techStack">
            <span v-for="(tech, index) in heroData.techStack" :key="index" :class="$style.techItem">
              {{ tech }}
            </span>
          </span>
        </p>
        <br />
        <div>
          {{ heroData.tagline }}
        </div>
        <h3 :class="$style.contentLinksTitle">Links:</h3>
        <div :class="$style.blockHeroLinks">
          <a v-for="(link, index) in heroData.links" :key="index" :href="link.href" target="_blank">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
$hero-min-height: 777px;

.blockHero {
  height: 100vh;
  min-height: $hero-min-height;

  @media (max-width: 979px) {
    max-height: 860px;
  }

  @media (max-width: 419px) {
    min-height: 666px;
  }
}

.blockHeroBackgroundImage {
  position: absolute;
  overflow: hidden;
  right: 0px;
  top: 0px;
  width: 45%;
  height: 100vh;
  min-height: $hero-min-height;
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);

  @media (max-width: 979px) {
    display: none;
  }
}

.blockHeroContent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: self-start;
  height: 100%;
  width: 55%;

  @media (max-width: 979px) {
    width: 100%;
  }
}

.contentSubtitle {
  padding-bottom: 3rem;
}

.contentLinksTitle {
  padding-top: 3rem;
  font-size: 1.4rem;
}

.blockHeroLinks {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.techStack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.techItem {
  background: $color-text-main;
  color: $color-text-contrast;
  font-size: $text-size-sm;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  letter-spacing: 0.3px;
  border-radius: 2px;
  font-weight: 500;
}
</style>
