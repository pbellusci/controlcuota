import { createApp } from 'vue'
import { createStore } from 'vuex'
import cuotaStore from './store.js'
import MainWrapper from './pages/MainWrapper.vue'
import router from './router'

const store = createStore(cuotaStore) 
const app = createApp(MainWrapper)

app.use(store)
app.use(router)

app.mount('#app')
