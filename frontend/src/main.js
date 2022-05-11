import { createApp } from 'vue'
import { createStore } from 'vuex'
import { useCookies } from "vue3-cookies";
import cuotaStore from './store.js'
import MainWrapper from './pages/MainWrapper.vue'
import router from './router'

const store       = createStore(cuotaStore)
const app         = createApp(MainWrapper)
const { cookies } = useCookies();

app.use(store)
app.use(router)
app.mount('#app')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!cookies.get('control-tkn') && cookies.get('control-tkn') != '') {
      next({ name: 'SignIn' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})