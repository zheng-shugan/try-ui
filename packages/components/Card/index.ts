import type { App } from 'vue'
import TCard from './src/index.vue'

TCard.install = (app: App) => {
  app.component(TCard.name, TCard)
}

export { TCard }
