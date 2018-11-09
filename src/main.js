import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import Vuelidate from "vuelidate"
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'

Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: '{attribute} is required!',
    email: '{attribute} is not a valid Email address.',
  }
})

Vue.component('BInput', templates.singleErrorExtractor.bootstrap4);

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
