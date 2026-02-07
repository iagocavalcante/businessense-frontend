import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { computed } from 'vue'
import BNavbar from '../BNavbar.vue'

// Mock useAuth
vi.mock('@/composables/useAuth', () => ({
  useAuth: () => ({
    isLoggedIn: computed(() => false),
    logout: vi.fn()
  })
}))

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'Home', component: { template: '<div>Home</div>' } },
    { path: '/login', name: 'Login', component: { template: '<div>Login</div>' } }
  ]
})

describe('BNavbar', () => {
  it('renders brand name', () => {
    const wrapper = mount(BNavbar, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Businessense')
  })

  it('shows login link when logged out', () => {
    const wrapper = mount(BNavbar, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Login')
    expect(wrapper.findComponent({ name: 'RouterLink' })).toBeTruthy()
  })

  it('applies transparent variant class', () => {
    const wrapper = mount(BNavbar, {
      props: { variant: 'transparent' },
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.find('.navbar-transparent').exists()).toBe(true)
  })
})
