import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'

describe('Hello.vue', () => {
  test('mount component', async () => {
    const msg = 'Hello Vue & Vitest'

    const wrapper = mount(Hello, {
      props: {
        msg: 'Hello Vue & Vitest',
      },
    })

    expect(wrapper.find('h1').text()).toContain(msg)
  })
})
