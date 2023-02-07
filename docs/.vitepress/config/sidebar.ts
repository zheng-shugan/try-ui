import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '快速开始',
      link: '/',
    },
    {
      text: '组件展示',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/Button/',
        },
      ],
    },
  ],
}

export default sidebar
