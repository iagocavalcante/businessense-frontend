import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      interceptors: {
        request: {
          use: vi.fn()
        }
      },
      get: vi.fn(),
      post: vi.fn()
    }))
  }
}))

describe('useApi', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
  })

  it('creates an axios instance', async () => {
    const { useApi } = await import('../useApi')
    const { api } = useApi()
    expect(api).toBeDefined()
  })

  it('has request interceptor configured', async () => {
    const { useApi } = await import('../useApi')
    const { api } = useApi()
    expect(api.interceptors.request.use).toHaveBeenCalled()
  })
})
