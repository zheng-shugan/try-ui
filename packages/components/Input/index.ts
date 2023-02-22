import type { App } from 'vue'
import Input from './src/index.vue'

Input.name = 'TInput'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}
export { Input }
