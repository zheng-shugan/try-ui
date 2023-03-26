import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '简介',
      items: [
        {
          text: '组件介绍',
          link: '/introduce',
        },
        {
          text: '安装指南',
        },
        {
          text: '快速上手',
        },
      ],
    },
    {
      text: '组件展示',
      // 1.在这里配置侧边栏和显示内容↓
      // 2.在你的组件目录中新建index.md文件，在里面编写自己的组件文档
      // 3.pnpm run docs:dev运行文档哦
      items: [
        {
          text: 'Button 按钮',
          link: '/components/Button/',
        },
        {
          text: 'Input 输入框',
          link: '/components/Input/',
        },
        {
          text: 'Card 图片卡',
          link: '/components/Card/',
        },
        {
          text: 'Avatar 头像',
          link: '/components/Avatar/',
        },
        {
          text: 'Textarea 文本域',
          link: '/components/Textarea/',
        },
        {
          text: 'Dialog 对话框',
          link: '/components/Dialog/',
        },
        {
          text: 'Icon 图标',
          link: '/components/Icon/',
        },
      ],
    },
  ],
}

export default sidebar
