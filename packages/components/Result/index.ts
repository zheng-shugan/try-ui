import type { App } from 'vue'
import Result from './src/index.vue'

Result.name = 'TResult'

Result.install = (app: App) => {
  app.component(Result.name, Result)
}

export { Result }
