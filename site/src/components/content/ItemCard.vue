<script setup lang="ts">
interface Props {
  problem: string;
  solution: string;
  result: string;
}

defineProps<Props>();
</script>

<template>
  <a href="#" class="card">
    <div class="card__header">
      <div class="card__header-label h-label">Problem</div>
      <div class="card__header-text h-text">{{ problem }}</div>
    </div>
    
    <div class="card__body">
      <div class="card__body-label b-label">Solution</div>
      <div class="card__body-text b-text">{{ solution }}</div>
    </div>
    
    <div class="card__footer">
      <div class="card__footer-label f-label">Result</div>
      <div class="card__footer-text f-text">{{ result }}</div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.card {
  display: block;
  background: $color-background-main;
  border: 2px solid $color-text-main;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  height: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    background: $color-text-main;
    transition: all 0.3s ease;
  }
  
  &:hover {
    border-color: $color-text-accent;
    transform: translateY(-2px);
    
    &::before {
      background: $color-text-accent;
      width: 25px;
      height: 25px;
    }
  }
  
  &::after {
    display: none;
  }

  &__header,
  &__body,
  &__footer {
    margin-bottom: 1rem;
  
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__header-label,
  &__body-label,
  &__footer-label {
    font-family: $font-main;
    font-size: $text-size-xsm;

    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    font-weight: 700;
 }

  &__header-text,
  &__body-text,
  &__footer-text {
    font-size: $text-size-sm;
    line-height: 1.4;
  }
}

.h-label {
  color: $color-text-accent;
}

.b-label {
  color: $color-text-main;
}

.f-label {
  color: $color-text-secondary;
}

.h-text {
  color: $color-text-main;
  font-weight: 600;
}

.b-text {
  color: $color-text-main;
}

.f-text {
  color: $color-text-secondary;
  font-style: italic;
}
</style>