<script setup lang="ts">
</script>

<template>
  <div class="background_image">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Background Image" />
  </div>
  <div>
    asd
  </div>
</template>

<style scoped lang="scss">

.background_image {
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
}

</style>