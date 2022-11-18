<template>
  <section class="content-main">
    <div class="html_struct">&lt;html&gt;</div>
    <div class="html_struct indent_1">&lt;body&gt;</div>

    <SlideHello class="indent_2 content-main_slide" />
    <SlideExperienceList class="indent_2" :experiences=experiences />
    <SlideMySkills class="indent_2" :skills=skills />
    <SlideContact class="indent_2" />

    <div class="html_struct indent_1">&lt;/body&gt;</div>
    <div class="html_struct">&lt;/html&gt;</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SlideHello from "@/components/content/SlideHello.vue";
import SlideExperienceList from "@/components/content/SlideExperienceList.vue";
import SlideMySkills from "@/components/content/SlideMySkillsList.vue";
import SlideContact from "@/components/content/SlideContact.vue";

import Experiences from "@/data/experiences"
import Skills from "@/data/skills";

export default defineComponent({
  name: "ContentMain",
  components: {
    SlideHello,
    SlideExperienceList,
    SlideMySkills,
    SlideContact,
  },
  data() {
    return {
      experiences: Experiences.value,
      skills: Skills.value,
      filter: "all",
    }
  },
})
</script>

<style>
  .content-main{
    width: 80%;
    padding: 12px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .content-main_slide{

  }

  .html_struct{
    font-family: 'Caveat', cursive;
    font-size: 20px;
    color: #5b5a5a;
  }
  .indent_1{
    padding-left: 12px;
    padding-right: 12px;
  }
  .indent_2{
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 1024px) {
    .content-main{
      width: calc(100% - 24px);
    }
  }
</style>