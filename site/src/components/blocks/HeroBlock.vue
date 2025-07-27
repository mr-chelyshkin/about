<script setup lang="ts">
</script>

<template>
  <div class="hero">
  <div class="hero__background_image">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Background Image" />
  </div>
  <div class="hero__content">
    <h1>Platform Engineering That Works at Scale</h1>
    <p>
      I build and operate cloud-native infrastructure, CI/CD pipelines, and tools solving real-world engineering challenges. 
      Go, Python, Kubernetes, AWS.
      Clear, robust solutions from 10+ years in production.
    </p>
  </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: calc(100vh);

  &__background_image {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 45%;
    height: 100%;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 979px) {
      display: none;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 55%;

    @media (max-width: 979px) {
      width: 100%;
    }
  }
}
</style>