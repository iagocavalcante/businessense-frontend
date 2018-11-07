import Vue from 'vue'
import Router from 'vue-router'
import Home from './domains/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        free: true
      },
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        free: true
      },
      component: () => import(/* webpackChunkName: "login" */ './domains/auth/components/Login')
    },
    {
      path: '/dashboard/welcome',
      name: 'welcome',
      component: () => import(/* webpackChunkName: "welcome" */ './domains/dashboard/components/WelcomeUser')
    },
    {
      path: '/dashboard/insights',
      name: 'insigths',
      component: () => import(/* webpackChunkName: "insights" */ './domains/dashboard/components/Insights')
    },
    {
      path: '/dashboard/risks',
      name: 'risks',
      component: () => import(/* webpackChunkName: "risks" */ './domains/dashboard/components/Risk')
    },
    {
      path: '/dashboard/possible-solutions',
      name: 'possible-solutions',
      component: () => import(/* webpackChunkName: "possible-solutions" */ './domains/dashboard/components/PossibleSolution')
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
