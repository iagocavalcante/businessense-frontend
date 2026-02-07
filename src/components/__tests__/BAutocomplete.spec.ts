import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BAutocomplete from '../BAutocomplete.vue'

describe('BAutocomplete', () => {
  const items = [
    { ID: 1, Name: 'Option 1' },
    { ID: 2, Name: 'Option 2' },
    { ID: 3, Name: 'Option 3' }
  ]

  it('renders input element', () => {
    const wrapper = mount(BAutocomplete, {
      props: { items }
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('shows suggestions when input matches', async () => {
    const wrapper = mount(BAutocomplete, {
      props: { items }
    })
    await wrapper.find('input').setValue('Option')
    expect(wrapper.findAll('.suggestion-item').length).toBe(3)
  })

  it('filters suggestions based on input', async () => {
    const wrapper = mount(BAutocomplete, {
      props: { items }
    })
    await wrapper.find('input').setValue('Option 1')
    expect(wrapper.findAll('.suggestion-item').length).toBe(1)
  })

  it('emits select when suggestion clicked', async () => {
    const wrapper = mount(BAutocomplete, {
      props: { items }
    })
    await wrapper.find('input').setValue('Option')
    const suggestionItems = wrapper.findAll('.suggestion-item')
    expect(suggestionItems.length).toBeGreaterThan(0)
    await suggestionItems[0]!.trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([items[0]])
  })

  it('supports custom display key', async () => {
    const customItems = [{ id: 1, label: 'Custom Label' }]
    const wrapper = mount(BAutocomplete, {
      props: { items: customItems, displayKey: 'label' }
    })
    await wrapper.find('input').setValue('Custom')
    expect(wrapper.find('.suggestion-item').text()).toContain('Custom Label')
  })
})
