import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store'
import 'bulma/css/bulma.css'
import './assets/style/index.scss'
import './assets/style/bulma-variables.scss'

createApp(App).use(router).use(vuex).mount('#app')
