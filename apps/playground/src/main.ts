import { createApp } from 'vue'
import router from './router'
import './style.css'
import '@martelo-vue/core/dist/style.css'

import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
