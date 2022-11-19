<template>
  <div class="slide-hello" id="as">
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
      ...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideHello",
})
</script>

<style scoped>
  .slide-hello{
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    display: flex;

    height: 70%;
    margin-top: 6px;
  }
  .slide-hello_description{
    width: 60%;
  }
  .slide-hello_interactive{
    width: 40%;
  }
</style>