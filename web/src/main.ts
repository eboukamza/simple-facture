import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import './assets/main.sass'

import en from './locales/en.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    fr: fr,
    es: es
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)

app.mount('#app')
