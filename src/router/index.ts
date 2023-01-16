import { createRouter, createWebHistory } from 'vue-router'
import Readme from '../views/Readme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Readme,
    },
  ],
})

export default router
