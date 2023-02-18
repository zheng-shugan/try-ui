import type { App } from 'vue'
import Badge from './src/badge.vue'

Badge.name = 'TBadge'

Badge.install = (app: App) => {
  app.component(Badge.name, Badge)
}

export { Badge }
