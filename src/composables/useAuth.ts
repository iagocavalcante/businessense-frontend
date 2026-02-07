import { ref, computed } from 'vue'
import type { User, LoginData, RegisterData, ApiResponse } from '@/types'

// Module-level state (shared across all useAuth() calls)
const user = ref<User | null>(null)
const token = ref<string | null>(localStorage.getItem('token'))

export function useAuth() {
  const isLoggedIn = computed(() => !!token.value)

  async function login(data: LoginData): Promise<void> {
    const { useApi } = await import('./useApi')
    const { api } = useApi()

    const response = await api.post<ApiResponse>('/api/user/login', data)

    if (response.data.status && response.data.account) {
      token.value = response.data.account.Token || null
      user.value = response.data.account
      if (token.value) {
        localStorage.setItem('token', token.value)
      }
    } else {
      throw new Error(response.data.message || 'Login failed')
    }
  }

  async function register(data: RegisterData): Promise<void> {
    const { useApi } = await import('./useApi')
    const { api } = useApi()

    const response = await api.post<ApiResponse>('/api/user/new', data)

    if (response.data.status && response.data.account) {
      token.value = response.data.account.Token || null
      user.value = response.data.account
      if (token.value) {
        localStorage.setItem('token', token.value)
      }
    } else {
      throw new Error(response.data.message || 'Registration failed')
    }
  }

  function logout(): void {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    logout
  }
}
