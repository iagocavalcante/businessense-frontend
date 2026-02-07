import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'
import { toastOptions } from './composables/useNotification'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)
app.use(Toast, toastOptions)

app.mount('#app')
