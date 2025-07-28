<script setup lang="ts">
interface Props {
  problem: string;
  solution: string;
  result: string;
}

defineProps<Props>();
</script>

<template>
  <a href="#" class="solution-card">
    <div class="card-header">
      <div class="problem-label">Problem</div>
      <div class="problem-text">{{ problem }}</div>
    </div>
    
    <div class="card-body">
      <div class="solution-label">Solution</div>
      <div class="solution-text">{{ solution }}</div>
    </div>
    
    <div class="card-footer">
      <div class="result-label">Result</div>
      <div class="result-text">{{ result }}</div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.solution-card {
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
}

.card-header,
.card-body,
.card-footer {
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.problem-label,
.solution-label,
.result-label {
  font-family: $font-main;
  font-size: $text-size-xsm;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.problem-label {
  color: $color-text-accent;
}

.solution-label {
  color: $color-text-main;
}

.result-label {
  color: $color-text-secondary;
}

.problem-text,
.solution-text,
.result-text {
  font-size: $text-size-sm;
  line-height: 1.4;
}

.problem-text {
  color: $color-text-main;
  font-weight: 600;
}

.solution-text {
  color: $color-text-main;
}

.result-text {
  color: $color-text-secondary;
  font-style: italic;
}
</style>