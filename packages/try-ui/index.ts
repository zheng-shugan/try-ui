import type { App } from 'vue'
import { Button } from '../components/Button'
import { Avatar } from '../components/Avatar'

const components = [
  Button,
  Avatar,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
