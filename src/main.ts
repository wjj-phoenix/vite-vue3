// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
//引入模板的全局的样式
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')