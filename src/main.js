import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import router from './router'
import plugins from '@/plugins'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App).use(router).use(plugins).use(pinia)
app.mount('#app')
