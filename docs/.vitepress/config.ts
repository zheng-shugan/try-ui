import { defineConfig } from 'vitepress'
// 将 config 文件夹中的文件集总导入
import sidebar from './config/sidebar'
export default defineConfig({
  lang: 'en-US',
  title: 'WelCome try-ui',
  base: '/vitepress_docs/',
  lastUpdated: true,
  description: 'try-ui 组件库',
  themeConfig: {
    nav: [
      { text: '你好呀', link: '/index' },
    ],
    sidebar,
  },
})
