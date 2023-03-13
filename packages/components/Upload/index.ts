import Upload from './src/index.vue'
import type { App } from 'vue'
Upload.name = 't-upload'

Upload.install = (app: App) => {
  app.component(Upload.name, Upload)
}

export { Upload }
