import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BModal from '../BModal.vue'

describe('BModal', () => {
  it('is hidden when show is false', () => {
    const wrapper = mount(BModal, {
      props: { show: false }
    })
    expect(wrapper.find('.modal').exists()).toBe(false)
  })

  it('is visible when show is true', () => {
    const wrapper = mount(BModal, {
      props: { show: true },
      global: {
        stubs: { teleport: true }
      }
    })
    expect(wrapper.find('.modal').exists()).toBe(true)
  })

  it('emits update:show when close button clicked', async () => {
    const wrapper = mount(BModal, {
      props: { show: true },
      global: {
        stubs: { teleport: true }
      }
    })
    await wrapper.find('.btn-close').trigger('click')
    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
  })

  it('renders header slot content', () => {
    const wrapper = mount(BModal, {
      props: { show: true },
      slots: {
        header: '<h5>Test Header</h5>'
      },
      global: {
        stubs: { teleport: true }
      }
    })
    expect(wrapper.find('.modal-header').text()).toContain('Test Header')
  })

  it('renders body slot content', () => {
    const wrapper = mount(BModal, {
      props: { show: true },
      slots: {
        default: '<p>Body content</p>'
      },
      global: {
        stubs: { teleport: true }
      }
    })
    expect(wrapper.find('.modal-body').text()).toContain('Body content')
  })

  it('applies fullscreen class when fullscreen prop is true', () => {
    const wrapper = mount(BModal, {
      props: { show: true, fullscreen: true },
      global: {
        stubs: { teleport: true }
      }
    })
    expect(wrapper.find('.modal-fullscreen').exists()).toBe(true)
  })
})
