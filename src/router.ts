import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { public: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { public: true }
  },
  {
    path: '/dashboard/welcome',
    name: 'Welcome',
    component: () => import('@/views/WelcomeView.vue')
  },
  {
    path: '/dashboard/insights',
    name: 'Insights',
    component: () => import('@/views/InsightsView.vue')
  },
  {
    path: '/dashboard/risks',
    name: 'Risks',
    component: () => import('@/views/RiskView.vue')
  },
  {
    path: '/dashboard/possible-solutions',
    name: 'Solutions',
    component: () => import('@/views/SolutionsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, _from, next) => {
  const { isLoggedIn } = useAuth()

  if (!to.meta.public && !isLoggedIn.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
