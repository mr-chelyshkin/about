<template>
  <div class="slide-hello">
    <div class="slide-hello_description">
      <div class="html_struct">&lt;h1&gt;</div>
      <h1 class="indent_1">My, Myself & I</h1>
      <div class="html_struct">&lt;/h1&gt;</div>

      <div class="html_struct">&lt;p&gt;</div>
      <p class="indent_1">
        Hello, my name is Igor and i'm software engineer.
        <br>
        I started working in 2013 and during this time I have gained to get some experience in IT.
      </p>
      <p class="indent_1">
        Most of all I will prefer work with IoT (new experience for me) or software development / devops.
      </p>
      <div class="html_struct">&lt;/p&gt;</div>
    </div>
    <div class="slide-hello_interactive">
    <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="{
          fullScreen: {
            enable: false
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
               quantity: 1,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
          },
      },
      particles: {
          color: {
          value: '#ffffff',
          },
          links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
          },
          collisions: {
          enable: true,
          },
          move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
          },
          number: {
          density: {
              enable: true,
              value_area: 800,
          },
          value: 80,
          },
          opacity: {
          value: 0.5,
          },
          shape: {
          type: 'circle',
          },
          size: {
          random: true,
          value: 5,
          },
      },
      detectRetina: true,
      }"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";


export default defineComponent({
  name: "SlideHello",
  // components: {Particles},
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
    align-items: stretch;
    display: flex;

    height: 70%;
    margin-top: 6px;
  }
  .slide-hello_description{
    width: 45%;
  }
  .slide-hello_interactive{
    width: 55%;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }
  #tsparticles{
    height: 100%;
  }
</style>