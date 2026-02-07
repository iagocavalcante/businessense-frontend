import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('useAuth', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.resetModules()
  })

  describe('initial state', () => {
    it('starts logged out when no token in localStorage', async () => {
      const { useAuth } = await import('../useAuth')
      const { isLoggedIn, token, user } = useAuth()

      expect(isLoggedIn.value).toBe(false)
      expect(token.value).toBeNull()
      expect(user.value).toBeNull()
    })

    it('restores token from localStorage', async () => {
      localStorage.setItem('token', 'stored-token')
      const { useAuth } = await import('../useAuth')
      const { token, isLoggedIn } = useAuth()

      expect(token.value).toBe('stored-token')
      expect(isLoggedIn.value).toBe(true)
    })
  })

  describe('logout', () => {
    it('clears token, user, and localStorage', async () => {
      localStorage.setItem('token', 'some-token')
      const { useAuth } = await import('../useAuth')
      const { token, user, logout } = useAuth()

      token.value = 'some-token'
      user.value = { ID: 1, Email: 'test@test.com', Firstname: 'Test', Lastname: 'User' }

      logout()

      expect(token.value).toBeNull()
      expect(user.value).toBeNull()
      expect(localStorage.getItem('token')).toBeNull()
    })
  })
})
