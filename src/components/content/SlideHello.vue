<template>
  <div id="about" class="slide-hello">
    <div class="slide-hello_description">
      <div class="html_struct">&lt;h1&gt;</div>
      <h1 class="indent_1">My, Myself & I</h1>
      <div class="html_struct">&lt;/h1&gt;</div>

      <div class="html_struct">&lt;p&gt;</div>
      <p class="indent_1">
        Hello, my name is Igor and I'm software engineer.
        <br>
        I started working in 2013 and during this time I have gained to get some experience in IT.
      </p>
      <p class="indent_1">
        Most of all I will prefer work with IoT (new experience for me) or software development / devops.
      </p>
      <div class="html_struct">&lt;/p&gt;</div>
    </div>
    <div class="slide-hello_interactive">
      <Particles id="tsparticles" :particlesInit="particlesInit" :options=particlesOpts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import ParticlesOpts from "@/data/particles"

export default defineComponent({
  name: "SlideHello",
  data() {
    return {
      particlesOpts: ParticlesOpts
    }
  },
  methods: {
    async particlesInit(engine: Engine) {
      await loadSlim(engine);
    },
  },
})
</script>

<style scoped>
  .slide-hello{
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    display: flex;

    height: 80%;
    margin-top: 6px;
  }
  .slide-hello_description{
    width: 45%;
  }
  .slide-hello_interactive{
    width: 55%;
    height: 100%;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }
  #tsparticles{
    height: 100%;
  }

  @media (max-width: 750px) {
    .slide-hello_interactive{
      display: none;
    }
    .slide-hello {
      height: auto;
    }
    .slide-hello_description {
      width: 100%;
    }
  }
</style>