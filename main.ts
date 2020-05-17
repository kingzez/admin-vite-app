import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'bulma/css/bulma.css'
import './assets/style/index.css'
import './assets/style/bulma.scss'

createApp(App).use(router).mount('#app')
