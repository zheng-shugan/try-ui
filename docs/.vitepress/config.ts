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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zheng-shugan/try-ui' },
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/introduce' },
      { text: '组件', link: '/components/Button/' },
      { text: '更新日志', link: '/等待生成更新日志后再有' },
    ],
    sidebar,
    outlineTitle: '目录',
  },
})
