import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dialog } from '..'

describe('test of dialog', () => {
  // 仿照Hello.test.ts，测试Dialog组件能否正常渲染，并且是否能正确显示出传递给它的`title`属性（在<div>中）
  // Hello.test.ts似乎是自带的，？？难道说可以自动生成测试文件嘛？它现在之所以通过不了，是咱们改了那个Hello里面msg相关东西
  // 官网上对各种API有详细讲述，很多，很多，555555555555555555555

  // 举个栗子
  test('should have title', () => {
    const title = ''

    const wrapper = mount(Dialog, {
      props: {
        title: 'title test',
      },
    })

    expect(wrapper.find('div').text()).toContain(title)
  })
  // 承接上面那个栗子↑——×
  test('should have msg-slot', () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: 'msg-slot test',
      },
    })

    expect(wrapper.text()).toContain('msg-slot test')
  })
  // 一个测试文件要写蛮多测试的，然后可以用describe给test分类，我这儿就先放一个里面了
  // 问了问chatGPT，555这个家伙真nb↓

  // 测试默认值
  test('renders with default values', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.vm.$props.title).toBe('title')
    expect(wrapper.vm.$props.modelValue).toBe(false)
    expect(wrapper.vm.$props.draggable).toBe(false)
    expect(wrapper.find('.dialog').exists()).toBe(false)
  })
  // 测试对话框唤起前状态
  test('hides the dialog on initial render', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.find('.dialog').exists()).toBe(false)
  })
  // 测试对话框能否正常显示——×
  test('shows the dialog when triggered', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.dialog').exists()).toBe(true)
    expect(wrapper.find('.mask').exists()).toBe(true)
  })
  // 测试点击按钮后对话框状态——×
  test('closes the dialog when clicked on close button', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.dialog').exists()).toBe(true)
    wrapper.find('t-button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.dialog').exists()).toBe(false)
    expect(wrapper.find('.mask').exists()).toBe(false)
  })
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
