import type { App } from 'vue'
import { Button, ButtonGroup } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { TCard } from '../components/Card'
import { Badge } from '../components/Badge'
import { Input } from '../components/Input'

const components = [
  Button,
  ButtonGroup,
  Avatar,
  TCard,
  Badge,
  Input,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
