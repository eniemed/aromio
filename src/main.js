
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './aromio/router/router'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
