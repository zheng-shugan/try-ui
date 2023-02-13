import type { App } from 'vue'
import { Button, ButtonGroup } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { TCard } from '../components/Card'
import { Badge } from '../components/Badge'

const components = [
  Button,
  ButtonGroup,
  Avatar,
  TCard,
  Badge,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
