import type { App } from 'vue'
import { Button, ButtonGroup } from '../components/Button'
import { Avatar } from '../components/Avatar'
import { TCard } from '../components/Card'
import { Badge } from '../components/Badge'
import { Input } from '../components/Input'
import { Textarea } from '../components/textarea'
import { Preview } from '../components/Preview'
import { Icon } from '../components/Icon'
import { Dialog } from '../components/Dialog'
import { Upload } from '../components/Upload'

const components = [
  Button,
  ButtonGroup,
  Avatar,
  TCard,
  Badge,
  Input,
  Textarea,
  Preview,
  Icon,
  Dialog,
  Upload,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export default install
