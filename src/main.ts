import { createApp } from 'vue'

import install from '../packages/try-ui'
import App from './App.vue'
import router from './router'

const app = createApp(App)
install(app)

app.use(router)

app.mount('#app')
