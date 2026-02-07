import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BFooter from '../BFooter.vue'

describe('BFooter', () => {
  it('renders footer element', () => {
    const wrapper = mount(BFooter)
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('contains copyright text', () => {
    const wrapper = mount(BFooter)
    expect(wrapper.text()).toContain('Businessense')
  })
})
