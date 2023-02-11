import { createRouter, createWebHistory } from 'vue-router'
import Readme from '../views/Readme.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/button',
      component: Readme,
      children: [{
        path: 'button',
        name: 'button',
        component: () => import('../components/Button.vue'),
      }],
    },
  ],
})

export default router
