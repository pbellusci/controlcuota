
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { signIn, setCurrentUser } from '../services/users'
import { reactive } from 'vue'


const formData = reactive({email: null, password: null})
const loginData = reactive({
  success: null,
  error: null
})

const logIn = async () => {
  try {
    const response = await signIn({user: formData})
    setCurrentUser(response)
    loginData.success = 'Redireccionando...'
    loginData.error = null
  } catch(er) {
    loginData.error = er.response.data.message
    loginData.success = null 
  }
}

</script>

<template>
  <form @submit.prevent="logIn">
    <input v-model="formData.email" type="email" placeholder="email" required/>
    <input v-model="formData.password" type="password" placeholder="Password" required/>
    
    <button> Entrar </button>
    <label v-if="loginData.success">{{loginData.success}}</label>
    <label v-if="loginData.error">{{loginData.error}}</label>
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
