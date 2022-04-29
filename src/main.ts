import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMobileDetection from 'vue-mobile-detection'

createApp(App).use(router, VueMobileDetection).mount('#app')
 