import { createApp } from 'vue'
import { createPinia } from "pinia"
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/tailwindcss'
import theme from './formkit.theme'
import { en, sv } from '@formkit/i18n'


const app = createApp(App)

app.use(createPinia());

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.use(plugin, defaultConfig({
  config: {
    classes: generateClasses(theme),
    // Define additional locales
    locales: { sv, en },
    // Define the active locale
    locale: 'sv',
  },
}))

app.mount('#app')
