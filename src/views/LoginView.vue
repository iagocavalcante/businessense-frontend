<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useNotification } from '@/composables/useNotification'
import BInput from '@/components/BInput.vue'
import BNavbar from '@/components/BNavbar.vue'

const router = useRouter()
const { login, register } = useAuth()
const { success, error } = useNotification()

const isLoading = ref(false)

const loginForm = reactive({
  email: '',
  password: ''
})

const registerForm = reactive({
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive({
  login: { email: false, password: false },
  register: { email: false, firstname: false, lastname: false, password: false, confirmPassword: false }
})

async function handleLogin() {
  errors.login.email = !loginForm.email
  errors.login.password = !loginForm.password

  if (errors.login.email || errors.login.password) return

  isLoading.value = true
  try {
    await login({ email: loginForm.email, password: loginForm.password })
    success('Login successful!')
    router.push({ name: 'Welcome' })
  } catch (e) {
    error(e instanceof Error ? e.message : 'Login failed')
  } finally {
    isLoading.value = false
  }
}

async function handleRegister() {
  errors.register.email = !registerForm.email
  errors.register.firstname = !registerForm.firstname
  errors.register.lastname = !registerForm.lastname
  errors.register.password = !registerForm.password || registerForm.password.length < 6
  errors.register.confirmPassword = registerForm.password !== registerForm.confirmPassword

  if (Object.values(errors.register).some(Boolean)) return

  isLoading.value = true
  try {
    await register({
      email: registerForm.email,
      firstname: registerForm.firstname,
      lastname: registerForm.lastname,
      password: registerForm.password
    })
    success('Account created successfully!')
    router.push({ name: 'Welcome' })
  } catch (e) {
    error(e instanceof Error ? e.message : 'Registration failed')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="login-view">
    <BNavbar />

    <div class="container py-5">
      <div class="row justify-content-center">
        <!-- Login Form -->
        <div class="col-md-5">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <h3 class="card-title mb-4">Login</h3>

              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <BInput
                    v-model="loginForm.email"
                    type="email"
                    placeholder="Enter your email"
                    :has-error="errors.login.email"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <BInput
                    v-model="loginForm.password"
                    type="password"
                    placeholder="Enter your password"
                    :has-error="errors.login.password"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Loading...' : 'Login' }}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-1 d-flex align-items-center justify-content-center">
          <div class="divider-text text-muted">or</div>
        </div>

        <!-- Register Form -->
        <div class="col-md-5">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <h3 class="card-title mb-4">Create Account</h3>

              <form @submit.prevent="handleRegister">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <BInput
                    v-model="registerForm.email"
                    type="email"
                    placeholder="Enter your email"
                    :has-error="errors.register.email"
                  />
                </div>

                <div class="row mb-3">
                  <div class="col-6">
                    <label class="form-label">First Name</label>
                    <BInput
                      v-model="registerForm.firstname"
                      placeholder="First name"
                      :has-error="errors.register.firstname"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Last Name</label>
                    <BInput
                      v-model="registerForm.lastname"
                      placeholder="Last name"
                      :has-error="errors.register.lastname"
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <BInput
                    v-model="registerForm.password"
                    type="password"
                    placeholder="Min 6 characters"
                    :has-error="errors.register.password"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Confirm Password</label>
                  <BInput
                    v-model="registerForm.confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    :has-error="errors.register.confirmPassword"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-success w-100"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Loading...' : 'Create Account' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.divider-text {
  font-size: 0.875rem;
}
</style>
