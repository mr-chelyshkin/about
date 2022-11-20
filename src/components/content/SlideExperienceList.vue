<template>
  <div id="experience" class="slide-experience-list">
    <div class="html_struct">&lt;h2&gt;</div>
    <h2 class="indent_1">Experience</h2>
    <div class="html_struct">&lt;/h2&gt;</div>

    <div class="html_struct">&lt;section&gt;</div>
    <section class="indent_1 slide-experience-list_section">
      <div class="slide-experience-list_card" :style="'border-top: 3px solid '+experience.color" v-for="experience in experiences" :key="experience.id">
        <div class="slide-experience-list_card_header">
          <img class="slide-experience-list_card_header_icon" :src="experience.logoUrl" :alt="experience.id"/>
          <div class="slide-experience-list_card_header_description">
            <a :href="experience.site"> {{ experience.company }}</a>
            <span :style="'color: '+experience.color">{{ experience.jobTitle }}</span>
            <span>{{ experience.start_at }} - {{ experience.finish_at }}</span>
          </div>
        </div>
        <div>
          <p v-html="experience.description"></p>
        </div>
      </div>
    </section>
    <div class="html_struct">&lt;/section&gt;</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Experience from "@/types/experience";

export default defineComponent({
  name: "SlideExperienceList",
  props: {
    experiences: {
      required: true,
      type: Array as PropType<Experience[]>
    },
  }
})
</script>

<style scoped>
  .slide-experience-list_section{
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .slide-experience-list_card{
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2),0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12);
    width: calc(50% - 58px);

    padding: 24px;
    margin-top: 2%;
  }
  .slide-experience-list_card_header{
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    display: flex;
  }
  .slide-experience-list_card_header_icon{
    width: 64px;
  }
  .slide-experience-list_card_header_description {
    justify-content: flex-start;
    flex-direction: column;
    display: flex;

    padding-right: 12px;
    padding-left: 12px;
  }
  .slide-experience-list_card_header_description a{
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
  }

  @media (max-width: 999px) {
    .slide-experience-list_card{
      width: 100%;
      margin-bottom: 24px;
    }
  }
</style>