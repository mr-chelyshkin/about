<script setup lang="ts">
import { heroData } from '@/data/hero/data';

interface Props {
  title?: string
  number?: string
}
const props = defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="block-hero" :data-block-title="props.title" :data-block-number="props.number">
      <div class="block-hero__background_image">
        <img :src="heroData.image" alt="Background Image" />
      </div>
      <div class="block-hero__content">
        <h1>{{ heroData.name }}</h1>
        <h2>{{ heroData.title }}</h2>
        <p>
          {{ heroData.description }}
          <br /><br />
          <span class="tech-stack">
            <span v-for="(tech, index) in heroData.techStack" :key="index" class="tech-item">
              {{ tech }}
            </span>
          </span>
        </p>
        <br />
        <div>
          {{ heroData.tagline }}
        </div>
        <h3>Links:</h3>
        <div class="block-hero__links">
          <a v-for="(link, index) in heroData.links" :key="index" :href="link.href" target="_blank">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block-hero {
  height: 100vh;

  &__background_image {
    position: absolute;
    overflow: hidden;
    right: 0px;
    top: 0px;
    width: 45%;
    height: 100vh;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: pulse 18s ease-in-out infinite;
    }

    @media (max-width: 979px) {
      display: none;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: self-start;
    height: 100%;
    width: 55%;

    @media (max-width: 979px) {
      width: 100%;
    }

    h2 {
      padding-bottom: 3rem;
    }

    h3 {
      padding-top: 3rem;
      font-size: 1.4rem;
    }
  }

  &__links {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tech-item {
    background: $color-text-main;
    color: $color-text-contrast;
    font-size: $text-size-sm;
    display: inline-block;
    padding: 0.3rem 0.8rem;
    letter-spacing: 0.3px;
    border-radius: 2px;
    font-weight: 500;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>