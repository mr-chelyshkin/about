<script setup lang="ts">
import HomeAbout from '@/components/content/HomeAbout.vue'
import HomeContact from '@/components/content/HomeContact.vue'
import HomeHero from '@/components/content/HomeHero.vue'
import HomeOpenSource from '@/components/content/HomeOpenSource.vue'
import HomeProof from '@/components/content/HomeProof.vue'
import HomeServices from '@/components/content/HomeServices.vue'
import HomeWork from '@/components/content/HomeWork.vue'
</script>

<template>
  <main id="main-content" class="home-view">
    <HomeHero />
    <HomeProof />
    <HomeServices />
    <HomeWork />
    <HomeAbout />
    <HomeOpenSource />
    <HomeContact />
  </main>
</template>
