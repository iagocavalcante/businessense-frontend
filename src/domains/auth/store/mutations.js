const auth_request = (state) => {
  state.status = 'loading'
}

const auth_success = (state, token, user) => {
  state.status = 'success'
  state.token = token
  state.user = user
}

const auth_error = (state) => {
  state.status = 'error'
}

const logout = (state) => {
  state.status = ''
  state.token = ''
}

export default {
  auth_request,
  auth_success,
  auth_error,
  logout
}