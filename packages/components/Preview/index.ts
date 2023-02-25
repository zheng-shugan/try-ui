import type { App } from 'vue'
import Preview from './src/index.vue'

Preview.name = 'tPreview'

Preview.install = (app: App) => {
  app.component(Preview.name, Preview)
}


export { Preview }
