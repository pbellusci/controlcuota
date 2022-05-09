import { createApp } from 'vue'
import { createStore } from 'vuex'
import cuotaStore from './store.js'
import Home from './pages/Home.vue'

const store = createStore(cuotaStore) 
const app = createApp(Home)
app.use(store)
app.mount('#app')
