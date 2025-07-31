<script setup lang="ts">
import { onMounted } from 'vue'

import LayoutMain from '@/components/LayoutMain.vue'

import { useSEO } from '@/composables/useSEO'
import { defaultSEO } from '@/data/meta/tags'
import { jsonLd } from '@/data/meta/jsonLd'

const { updateMeta } = useSEO()

onMounted(() => {
  updateMeta(defaultSEO)

  const script = document.createElement('script')
  script.textContent = JSON.stringify(jsonLd)
  script.type = 'application/ld+json'
  document.head.appendChild(script)
})
</script>

<template>
  <div id="app">
    <LayoutMain>
      <router-view />
    </LayoutMain>
  </div>
</template>
