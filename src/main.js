import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.free)) {
    if (store.getters['Login/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
