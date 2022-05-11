
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { signIn } from '../services/users'
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useCookies } from "vue3-cookies";

const store = useStore();
const formData = reactive({email: null, password: null})
const { cookies } = useCookies();

const logIn = async () => {
  try {
    const response = await signIn({user: formData})
    //store.commit('setCurrentUserData', response.data)
    //store.commit('setCurrentUserAuthorization', response.headers.authorization)
    cookies.set("control-tkn", response.headers.authorization);
    cookies.set("control-current-user", response.data.user);

    console.log(store.getters)
  } catch(er) {
    console.error(er.message)
  }
}

</script>

<template>
  <form @submit.prevent="logIn">
    <input v-model="formData.email" type="email" placeholder="email" required/>
    <input v-model="formData.password" type="password" placeholder="Password" required/>

    <button> Entrar </button>
  </form>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
