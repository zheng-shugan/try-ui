import type { App } from 'vue'
import Pagination from './src/index.vue'

Pagination.name = 'TPagination'

Pagination.install = (app: App) => {
  app.component(Pagination.name, Pagination)
}
export { Pagination }
