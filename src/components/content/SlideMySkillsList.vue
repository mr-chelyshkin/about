<template>
  <div id="skills" class="slide-my-skills-list">
    <ModalFrame :modalShow="modalShow" :modalClose="modal" :modalContent="modalContent" :modalTitle="modalTitle" />

    <div class="html_struct">&lt;h2&gt;</div>
    <h2 class="indent_1">Skills</h2>
    <div class="html_struct">&lt;/h2&gt;</div>

    <div class="html_struct">&lt;div&gt;</div>
    <div class="indent_1 slide-my-skills_tags">
      <button @click="filtered('all')" class="slide-my-skills_tag" style="border-top: 3px solid #0277ff;">
        All
      </button>
      <button @click="filtered('dev')" class="slide-my-skills_tag" style="border-top: 3px solid #11c304;">
        Dev
      </button>
      <button @click="filtered('ops')" class="slide-my-skills_tag" style="border-top: 3px solid #11c304;">
        Ops
      </button>
      <button @click="filtered('management')" class="slide-my-skills_tag" style="border-top: 3px solid #f1fd0f;">
        Management
      </button>
      <button @click="filtered('etc')" class="slide-my-skills_tag" style="border-top: 3px solid #f71255;">
        Etc
      </button>
    </div>
    <div class="html_struct">&lt;/div&gt;</div>

    <div class="html_struct">&lt;section&gt;</div>
    <transition-group tag="div" name="list-complete" class="indent_1 slide-my-skills-list_section">
      <button @click="modal(skill.title, skill.content, true)" class="slide-my-skills-list_card list-complete-item" v-for="skill in list" :key="skill.id">
        {{ skill.title }}
      </button>
    </transition-group>
    <div class="html_struct">&lt;/section&gt;</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import ModalFrame from "@/components/ModalFrame.vue";
import Skill from "@/types/skill";
import skills from "@/data/skills";

export default defineComponent({
  name: "SlideMySkills",
  components: {
    ModalFrame,
  },
  props: {
    skills: {
      required: true,
      type: Array as PropType<Skill[]>
    },
  },
  data() {
    return {
      list: skills,

      modalShow: false,
      modalTitle: "",
      modalContent: "",
    }
  },

  methods: {
    filtered(group: string) {
      console.log(process.env.GOOGLE_API_KEY)
      if (group === "all") {
        this.list = [...this.skills]
      } else {
        this.list = [...this.skills].filter((x) => x.group === group)
      }
    },
    modal(title: string, content: string, show: boolean) {
      this.modalShow = show
      this.modalTitle = title
      this.modalContent = content
    }
  }
})
</script>

<style scoped>
  .slide-my-skills-list_section{
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;

    margin-top: 24px;
    margin-bottom: 24px;
  }
  .slide-my-skills_tags{
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;

    padding: 12px;
  }
  .slide-my-skills_tag{
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2),0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12);
    transition: all 0.3s ease-out;
    background: none;
    border: none;

    border-top: 3px solid #ffffff;
    color: #ffffff;
    padding: 12px;

    font-family: 'Sono', sans-serif;
    font-size: 16px;
  }
  .slide-my-skills_tag:hover{
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0,0,0,0.11),
    0 24px 46px var(--box-shadow-color);
  }
  .slide-my-skills-list_card{
    border: 3px solid #2b2b2b;
    background: none;
    color: #ffffff;

    cursor: zoom-in;

    padding: 12px;
    margin: 6px;
  }

  .list-complete-item {
    transition: all 1.8s ease;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter-from,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
    z-index: 0;
  }

  @media (max-width: 700px) {
    .slide-my-skills_tags{
      justify-content: flex-start;
      row-gap: 16px;
      column-gap: 16px;
    }
  }
</style>