import type { App } from "vue"
import Dialog from './src/index.vue'

Dialog.name = 'TDialog'

Dialog.install = (app: App) => {
    app.component(Dialog.name, Dialog)
}

export { Dialog }