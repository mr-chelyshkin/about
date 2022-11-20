import { createApp } from "vue"
import App from "./App.vue"

import  VueGoogleMaps from "@fawmi/vue-google-maps";
import VueSmoothScroll from "vue3-smooth-scroll";
import { vfmPlugin } from "vue-final-modal";
import Particles from "vue3-particles";

import "@/assets/global.css"
createApp(App).use(
    VueGoogleMaps,
        {
        load: {
            key: process.env.VUE_APP_GOOGLE_API_KEY,
            language: "en",
        },
}).use(
    VueSmoothScroll,
    {
        duration: 300,
        updateHistory: true,
        easingFunction: null,
    }
).use(
    vfmPlugin
).use(
    Particles
).mount("#app")