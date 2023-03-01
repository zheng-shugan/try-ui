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
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('../components/Button.vue'),
      },
      {
        path: 'textarea',
        name: 'textarea',
        component: () => import('../components/Textarea/demo1.vue'),
        },
        {
          path: 'input',
          name: 'input',
          component: () => import('../components/Input.vue'),
        },
        {
          path: 'avatar',
          name: 'avatar',
          component: () => import('../components/Avatar.vue'),
        },
        {
          path: 'card',
          name: 'card',
          component: () => import('../components/Card.vue'),
        },
      ],
    },
  ],
})

export default router
