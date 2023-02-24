export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
import { app } from '@storybook/vue3';
import { createPinia } from "pinia"
import "../src/tailwind.css";
import { routes } from '../src/routes'
import { createRouter, createWebHistory } from 'vue-router'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/tailwindcss'
import theme from '../src/formkit.theme';
import { de, en, sv } from '@formkit/i18n'

app.use(createPinia());

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.use(plugin, defaultConfig({
  config: {
    // Define additional locales
    locales: { de, sv, en },
    // Define the active locale
    locale: 'sv', // why doesn't this happen?
    classes: generateClasses(theme),
    /*locales: {
      de: {
        ui: {
          submit: 'Senden'
        },
        validation: {
          required({ name }) {
            return `${name[0].toUpperCase() + name.substr(1)} ist ein Pflichtfeld.`
          },
          email: 'Dies ist keine gültige E-Mail.'
        }
      }
    },*/
    messages: {
      sv: {
        ui: {
          submit: 'Yo!',
        },
      },
    },
  },
}))
