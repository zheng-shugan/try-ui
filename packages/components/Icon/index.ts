import type { App } from "vue"
import Icon from './src/index.vue'

Icon.name = 'TIcon'

Icon.install = (app: App) => {
    app.component(Icon.name, Icon)
}

export { Icon }