import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

import './Style.css' // Ensure this points to your Tailwind CSS file

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .mount('#app')