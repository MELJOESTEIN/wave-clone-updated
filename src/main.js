import { createApp } from 'vue'
import App from './App.vue'

// Styles globaux : d'abord les tokens (variables), puis le reset/base.
import './assets/styles/tokens.css'
import './assets/styles/main.css'

createApp(App).mount('#app')
