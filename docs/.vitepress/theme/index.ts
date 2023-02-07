import defaultTheme from 'vitepress/theme'
import TryUI from '../../../packages/try-ui/index'
export default {
  ...defaultTheme,
  // 引入自定义组件，在 md 文件中使用
  enhanceApp({ app }) {
    app.use(TryUI)
  },
}
