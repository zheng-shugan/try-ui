import type { App } from 'vue'
import { Button } from '../components/Button'

const components = [
  Button,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
