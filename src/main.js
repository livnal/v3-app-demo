import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import router from './router'
import plugins from '@/plugins'

const app = createApp(App).use(router).use(plugins)
app.mount('#app')
