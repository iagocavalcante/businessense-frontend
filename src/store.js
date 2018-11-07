import Vue from 'vue'
import Vuex from 'vuex'
import Login from '@/domains/auth/store'

Vue.use(Vuex)

const modules = {
  Login
}

export default new Vuex.Store({
  modules
})
