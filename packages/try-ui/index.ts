import type { App } from 'vue'
import { Button } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { TCard } from '../components/Card'

const components = [
  Button,
  Avatar,
  TCard,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
