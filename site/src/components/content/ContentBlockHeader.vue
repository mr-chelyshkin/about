<script setup lang="ts">
interface Props {
  subtitle: string
  number: string
  title: string
}
const props = defineProps<Props>()
const subtitleText = `// ${props.subtitle.toUpperCase()}`
</script>

<template>
  <div :class="$style.contentBlockHeader" :data-block-title="subtitle" :data-block-number="number">
    <div class="container">
      <p :class="$style.contentBlockHeaderSubtitle">{{ subtitleText }}</p>
      <h3 :class="$style.contentBlockHeaderTitle">{{ title }}</h3>
    </div>
  </div>
</template>

<style module lang="scss">
.contentBlockHeader {
  background-color: $color-background-contrast;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.7);
  padding: 6rem 0;
  width: 100%;

  @media (max-width: 1239px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.contentBlockHeaderSubtitle {
  color: $color-text-contrast;
}

.contentBlockHeaderTitle {
  color: $color-text-contrast;
}
</style>
