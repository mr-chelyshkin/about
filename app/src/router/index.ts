import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '@/views/ContentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.path !== from.path && (to.name === 'styleguide' || from.name === 'styleguide')) {
      return savedPosition ?? { top: 0, behavior: 'instant' }
    }
    return undefined
  },
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentView,
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: () => import('@/views/StyleguideView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: ContentView,
    },
  ],
})

export default router
