import { createRouter, createWebHistory } from 'vue-router'

import { siteContent } from '@/contents'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: siteContent.meta.title },
    },
    {
      path: '/styleguide/',
      alias: '/styleguide',
      name: 'styleguide',
      component: () => import('@/views/StyleGuideView.vue'),
      meta: { title: siteContent.meta.styleguide.title },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : siteContent.meta.title
})

export default router
