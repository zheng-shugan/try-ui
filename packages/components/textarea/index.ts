import type { App } from 'vue'
import Textarea from './src/index.vue'
import TextareaPre from './src/textarea_pre.vue'

Textarea.name = 'tTextarea'
TextareaPre.name = 'textareaPre'

Textarea.install = (app: App) => {
  app.component(Textarea.name, Textarea)
}

TextareaPre.install = (app: App) => {
  app.component(TextareaPre.name, TextareaPre)
}

export { Textarea, TextareaPre }
