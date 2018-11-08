import axios from 'axios'

const login = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    commit('auth_request')
    axios({ url: `${process.env.VUE_APP_HOST}/user/login`, data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.account.token
        const user = resp.data.account
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
  })
}

export default {
  login
}