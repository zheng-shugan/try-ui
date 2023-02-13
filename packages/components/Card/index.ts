import type { App } from 'vue'
import TCard from './card.vue'

TCard.install = (app: App) => {
  app.component(TCard.name, TCard)
}

export { TCard }
