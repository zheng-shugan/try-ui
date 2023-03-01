import type { App } from 'vue'
import Textarea from './src/index.vue'


Textarea.name = 'tTextarea'


Textarea.install = (app: App) => {
  app.component(Textarea.name, Textarea)
}




export { Textarea }
