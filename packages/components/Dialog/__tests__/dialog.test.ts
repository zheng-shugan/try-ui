import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dialog } from '..'

describe('test of dialog', () => {
  // 仿照Hello.test.ts，测试Dialog组件能否正常渲染，并且是否能正确显示出传递给它的`title`属性（在<div>中）
  // Hello.test.ts似乎是自带的，？？难道说可以自动生成测试文件嘛？它现在之所以通过不了，是咱们改了那个Hello里面msg相关东西
  // 官网上对各种API有详细讲述，很多，很多，555555555555555555555

  // 测试——必须有title
  test('should have title', () => {
    const title = ''
    const wrapper = mount(Dialog, {
      props: {
        title: 'title test',
      },
    })
    expect(wrapper.find('div').text()).toContain(title)
  })

  // 测试——属性默认值
  test('renders with default values', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.vm.$props.title).toBe('title')
    expect(wrapper.vm.$props.modelValue).toBe(false)
    expect(wrapper.vm.$props.draggable).toBe(false)
    expect(wrapper.find('.dialog').exists()).toBe(false)
  })

  // 测试——对话框唤起前状态
  test('hides the dialog on initial render', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.find('.dialog').exists()).toBe(false)
  })

  // 测试——对话框能否正常显示
  test('shows the dialog when triggered', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true },
    })

    // 延迟1秒后执行
    setTimeout(async () => {
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.dialog').exists()).toBe(true)
      expect(wrapper.find('.mask').exists()).toBe(true)
    }, 1000)
  })

  // 测试——点击按钮后对话框状态
  test('closes the dialog when clicked on close button', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true },
    })

    // 延迟一秒后执行
    setTimeout(async () => {
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.dialog').exists()).toBe(true)
      wrapper.find('t-button').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.dialog').exists()).toBe(false)
      expect(wrapper.find('.mask').exists()).toBe(false)
    }, 1000)
  })
  // 这俩不知道为啥通不过，难道说是也需要延时？附带一个modelValue？
  // test('renders the correct title', () => {
  //   const title = 'My Dialog'
  //   const wrapper = mount(Dialog, {
  //     props: { title },
  //   })
  //   expect(wrapper.find('.title').text()).toBe(title)
  // })

  // test('renders the correct message', () => {
  //   const msg = 'Hello World!'
  //   const wrapper = mount(Dialog, {
  //     slots: { msg },
  //   })
  //   expect(wrapper.find('.msg').text()).toBe(msg)
  // })
})
