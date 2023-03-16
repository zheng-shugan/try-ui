import { createApp } from 'vue'

import install from '../packages/try-ui'
import App from './App.vue'
import router from './router'
// 引入文本复制粘贴插件
// import VueClipBoard from 'vue-clipboard2'
// 引入样式
import '../packages/theme-chalk/index.scss'
// 引入icon图标样式和配置
import '@/assets/icons/index.css'
import '@/assets/icons/index.js'


const app = createApp(App)
install(app)

app.use(router)
// app.use(VueClipBoard)

app.mount('#app')
