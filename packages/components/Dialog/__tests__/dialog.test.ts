import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dialog } from '..'

describe('test of dialog', () => {
  // 仿照Hello.test.ts，测试Dialog组件能否正常渲染，并且是否能正确显示出传递给它的`title`属性（在<div>中）
  // Hello.test.ts似乎是自带的，？？难道说可以自动生成测试文件嘛？它现在之所以通过不了，是咱们改了那个Hello里面msg相关东西
  // 官网上对各种API有详细讲述，很多，很多，555555555555555555555

  // 举个栗子，title是必须有的，这个测试通过
  test('should have title', () => {
    const title = ''

    const wrapper = mount(Dialog, {
      props: {
        title: 'title test',
      },
    })

    expect(wrapper.find('div').text()).toContain(title)
  })
  // 承接上面那个栗子↑——slot可有可无，所以这个必须有slot的测试无法通过
  test('should have msg-slot', () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: 'msg-slot test',
      },
    })

    expect(wrapper.text()).toContain('msg-slot test')
  })
  // 再来一个栗子，一个测试文件要写蛮多测试的，然后可以用describe给test分类，我这儿就先放一个里面了
  test('emits "confirm" event when confirm button is clicked', async () => {
    const wrapper = mount(Dialog, {
      props: {
        title: 'title test',
      },
      slots: {
        default: 'msg-slot test',
      },
    })

    await wrapper.find('.btn-confirm').trigger('click')
    expect(wrapper.emitted('handleConfirm')).toHaveLength(1)
  })

  // 难过自己写的测试都通不过，问了问chatGPT，555这个家伙真nb↓
  // 测试弹出对话框是否能正常弹出
  // 然而我发现了一个Dialog组件严重错误：该组件是基于组件内部一个按钮点击触发，也就是说，我把一个button与关闭和确认取消毫不相关的按钮封装进了这里面！！而且还承载着显示/不显示对话框的关键功能！！！啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
  test('should render dialog when button is clicked', async () => {
    const wrapper = mount(Dialog)
    expect(wrapper.find('.dialog').exists()).toBe(false)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.dialog').exists()).toBe(true)
  })
})
