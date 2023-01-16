import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'

describe('Hello.vue', () => {
  test('mount component', async () => {
    const msg = 'Hello Vue'

    const wrapper = mount(Hello)

    expect(wrapper.text()).toContain(msg)
  })
})
