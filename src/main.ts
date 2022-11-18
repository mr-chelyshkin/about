import { createApp } from 'vue'
import App from './App.vue'

import  VueGoogleMaps from '@fawmi/vue-google-maps'
import { vfmPlugin } from 'vue-final-modal'

import "@/assets/global.css"
createApp(App).use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_API_KEY,
        language: "en",
    },
}).use(vfmPlugin).mount('#app')