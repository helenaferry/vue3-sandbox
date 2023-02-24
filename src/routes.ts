import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import WebshopExample from './views/WebshopExample.vue'
import FormExample from './views/FormExample.vue';
import MyFormExample from './views/MyFormExample.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  { path: '/:path(.*)', component: NotFound },
  { path: '/webshop', component: WebshopExample, meta: { title: 'Webshop Example' } },
  { path: '/form', component: FormExample, meta: { title: 'FormKit Example' } },
  { path: '/my-form', component: MyFormExample, meta: { title: 'My Form Example' } },
]
