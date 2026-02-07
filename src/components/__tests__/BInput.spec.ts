import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BInput from '../BInput.vue'

describe('BInput', () => {
  it('renders input element', () => {
    const wrapper = mount(BInput)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('renders with placeholder', () => {
    const wrapper = mount(BInput, {
      props: { placeholder: 'Enter email' }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter email')
  })

  it('renders with custom type', () => {
    const wrapper = mount(BInput, {
      props: { type: 'password' }
    })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(BInput, {
      props: { modelValue: '' }
    })
    await wrapper.find('input').setValue('test value')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value'])
  })

  it('applies error class when hasError is true', () => {
    const wrapper = mount(BInput, {
      props: { hasError: true }
    })
    expect(wrapper.find('input').classes()).toContain('is-invalid')
  })

  it('shows icon when hasIcon is true', () => {
    const wrapper = mount(BInput, {
      props: { hasIcon: true, iconClass: 'bi-envelope' }
    })
    expect(wrapper.find('.input-icon').exists()).toBe(true)
  })
})
