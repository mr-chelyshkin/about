<template>
  <div class="container">
    <MenuMain />
    <ContentMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MenuMain from "@/components/MenuMain.vue";
import ContentMain from "@/components/ContentMain.vue";

export default defineComponent({
  name: "App",
  components: {
    MenuMain,
    ContentMain,
  }
});
</script>

<style scoped>
  .container{
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;

    height: 100%;
    max-width: 2000px;
    min-width: 650px;
  }

  @media (max-width: 1024px) {
    .container{
      flex-direction: column;
    }
  }
</style>
