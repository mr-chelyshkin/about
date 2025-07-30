<script setup lang="ts">
import LayoutCard from '@/components/base/BaseCard.vue'

interface DataItem {
  key: string
  value: string
}
interface Props {
  header?: DataItem
  footer?: DataItem
  body?: DataItem
  href?: string
}
const props = defineProps<Props>()
</script>

<template>
  <LayoutCard :href="props.href" :class="$style.itemCardText">
    <div v-if="header" :class="$style.itemCardTextHeader">
      <div :class="[$style.itemCardTextHeaderLabel, $style.hLabel]">{{ header.key }}</div>
      <div :class="[$style.itemCardTextHeaderText, $style.hText]">{{ header.value }}</div>
    </div>
    <div v-if="body" :class="$style.itemCardTextBody">
      <div :class="[$style.itemCardTextBodyLabel, $style.bLabel]">{{ body.key }}</div>
      <div :class="[$style.itemCardTextBodyText, $style.bText]">{{ body.value }}</div>
    </div>
    <div v-if="footer" :class="$style.itemCardTextFooter">
      <div :class="[$style.itemCardTextFooterLabel, $style.fLabel]">{{ footer.key }}</div>
      <div :class="[$style.itemCardTextFooterText, $style.fText]">{{ footer.value }}</div>
    </div>
  </LayoutCard>
</template>

<style module lang="scss">
.itemCardText {
  // Main component styles will be handled by LayoutCard
}

.itemCardTextHeader,
.itemCardTextBody,
.itemCardTextFooter {
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.itemCardTextHeaderLabel,
.itemCardTextBodyLabel,
.itemCardTextFooterLabel {
  font-family: $font-main;
  font-size: $text-size-xsm;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  font-weight: 700;
  opacity: 0.8;
}

.itemCardTextHeaderLabel {
  font-size: $text-size-xsm;
  letter-spacing: 1.2px;
  position: relative;
  opacity: 1;

  &::after {
    background: $color-text-accent;
    content: '';
    transition: width 0.3s ease;
    position: absolute;
    bottom: -3px;
    width: 20px;
    height: 2px;
    left: 0;
  }
}

.itemCardTextHeaderText,
.itemCardTextBodyText,
.itemCardTextFooterText {
  transition: all 0.3s ease;
  font-size: 0.95rem;
  line-height: 1.6;
}

// Color classes
.hLabel {
  color: $color-text-accent;
}

.bLabel {
  color: $color-text-main;
}

.fLabel {
  color: $color-text-secondary;
}

.hText {
  color: $color-text-main;
  font-weight: 600;
  font-size: 1.05rem;
}

.bText {
  color: $color-text-main;
  font-weight: 400;
}

.fText {
  color: $color-text-secondary;
  font-style: italic;
  font-size: 0.9rem;
}

// Section-specific styles
.itemCardTextHeader {
  border-bottom: 1px solid rgba($color-text-main, 0.05);
  padding-bottom: 1rem;
}

.itemCardTextBody {
  padding: 1rem 0;
}

// Hover effects
.itemCardText:hover {
  .itemCardTextHeaderLabel::after {
    width: 40px;
  }

  .itemCardTextBodyLabel,
  .itemCardTextFooterLabel {
    opacity: 1;
  }

  .hText {
    color: $color-text-accent;
    transform: translateX(5px);
  }
}
</style>