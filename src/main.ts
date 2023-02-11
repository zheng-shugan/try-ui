import { createApp } from 'vue'

import install from '../packages/try-ui'
import App from './App.vue'
import router from './router'
// 引入样式
import '../packages/theme-chalk/index.scss'

const app = createApp(App)
install(app)

app.use(router)

app.mount('#app')
