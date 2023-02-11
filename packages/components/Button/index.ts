import type { App } from 'vue'
import Button from './src/button.vue'
import ButtonGroup from './src/buttongroups.vue'

Button.name = 'TButton'
ButtonGroup.name = 'TButtonGroup'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export { Button, ButtonGroup }
