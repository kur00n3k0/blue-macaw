import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { syncDocumentLocale } from './i18n'
import router from './router'

syncDocumentLocale()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
