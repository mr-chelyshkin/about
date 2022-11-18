<template>
  <div class="slide-contact">
    <div class="slide-contact_content">
      <div class="html_struct">&lt;h2&gt;</div>
      <h2 class="indent_1">Contact me</h2>
      <div class="html_struct">&lt;/h2&gt;</div>

      <div class="html_struct">&lt;p&gt;</div>
      <p class="indent_1">
        I'm interested in opportunities.
        But, if you have other request or question for me,
        don't hesitate to use form below.
      </p>
      <div class="html_struct">&lt;/p&gt;</div>

      <div class="html_struct">&lt;form&gt;</div>
      <form @submit.prevent="sendMail" ref="form" class="indent_1 slide-contact_content_form">
        <input
            class="slide-contact_content_form_input sm"
            :class="v$.form.name.$errors.length > 0 ?'input-error':''"
            v-model="v$.form.name.$model"
            placeholder="Name"
            type="text"
        />
        <input
            class="slide-contact_content_form_input sm"
            :class="v$.form.email.$errors.length > 0 ?'input-error':''"
            v-model="v$.form.email.$model"
            placeholder="Email"
            type="email"
        />
        <input
            class="slide-contact_content_form_input lg"
            :class="v$.form.subject.$errors.length > 0 ?'input-error':''"
            v-model="v$.form.subject.$model"
            placeholder="Subject"
            type="text"
        />
        <textarea
            class="slide-contact_content_form_input slide-contact_content_form_area lg"
            :class="v$.form.message.$errors.length > 0 ?'input-error':''"
            v-model="v$.form.message.$model"
            placeholder="Message"
        />
        <input
            class="slide-contact_content_form_btn"
            :disabled="v$.form.$invalid"
            value="Send Message!"
            type="submit"
        />
      </form>
      <div class="html_struct">&lt;/form&gt;</div>
    </div>

    <div class="slide-contact_map">
      <GMapMap :center="MapInfo.center" :options="MapInfo.options" :zoom="MapInfo.zoom" :map-type-id="MapInfo.type" style="width: 100%; height: 110%">
        <GMapMarker :key="marker.id" v-for="marker in MapInfo.markers" :position="marker.position"/>
      </GMapMap>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import emailjs from '@emailjs/browser';
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import MapInfo from "@/data/map";

export default defineComponent({
  name: "SlideContact",
  data() {
    return {
      form: {message: "", subject: "", email: "", name: ""},
      v$: useVuelidate(),
      MapInfo,
    }
  },
  validations() {
    return {
      form: {message: {required}, subject: {required}, email: {required, email}, name: {required}}
    }
  },
  methods: {
    sendMail() {
      emailjs.send(
          process.env.MAIL_SERVICE_ID,
          process.env.MAIL_TEMPLATE_ID,
          this.form,
          process.env.MAIL_API_KEY,
      ).then(() => {
        this.form = {message: "", subject: "", email: "", name: ""}
      })
    }
  }
})
</script>

<style scoped>
    .slide-contact{
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      flex-wrap: wrap;
    }
    .slide-contact_content{
      width: 50%;
    }
    .slide-contact_map{
      width: 50%;
      margin-right: -36px;
    }

    .slide-contact_content_form{
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      flex-wrap: wrap;
    }
    .sm{
      width: calc(50% - 50px);
    }
    .lg{
      width: 100%;
    }
    .slide-contact_content_form_input{
      border: 2px solid #2b2b2b;
      background-color: #2b2b2b;
      color: #8d8d8d;

      font-size: 16px;

      padding: 12px 20px;
      margin-top: 12px;
    }
    .slide-contact_content_form_input:focus{
      transition: .5s;
      transition-timing-function: linear;
      border-bottom: 2px solid #f1fd0f;
    }
    .slide-contact_content_form_input:focus-visible{
      outline: none;
    }
    .slide-contact_content_form_area{
      min-height: 140px;
      height: 160px;

      resize: vertical;
    }
    .slide-contact_content_form_btn{
      border: 1px solid #f1fd0f;
      color: #f1fd0f;

      font-size: 16px;
      letter-spacing: 2px;

      margin-top: 36px;
      margin-bottom: 12px;
      padding: 12px 20px;

      background: none;
      cursor: pointer;
    }
    .slide-contact_content_form_btn:disabled{
      color: #5b5a5a;
    }

    .vue-map-container{
      width: 100%;
      height: 100%;
    }
    .input-error:focus {
      transition: .5s;
      transition-timing-function: linear;
      border-bottom: 2px solid #da0101;
    }

    @media (max-width: 930px) {
      .slide-contact{
        flex-direction: column;
        margin-bottom: 5%;
      }
      .slide-contact_content{
        width: 100%;
      }
      .slide-contact_map{
        width: 100%;
        height: 250px;
        margin-top: 2%;
      }
    }
</style>