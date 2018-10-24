import Vue from 'vue'
import Router from 'vue-router'
import Home from './domains/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./domains/auth/components/Login')
    },
    {
      path: '/dashboard/welcome',
      name: 'welcome',
      component: () => import('./domains/dashboard/components/WelcomeUser')
    },
    {
      path: '/dashboard/insights',
      name: 'insigths',
      component: () => import('./domains/dashboard/components/Insights')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './domains/About.vue')
    }
  ]
})
