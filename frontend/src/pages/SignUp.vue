
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {ref, reactive} from 'vue'
import { signUp, setCurrentUser } from '../services/users'

const formData = reactive({name: null, last_name: null, email: null, password: null, confirm_password: null})
const signUpData = reactive({
  success: null,
  error: null
})

const createUser = async () => {
  if (formData.password != formData.confirm_password) {
    signUpData.error = 'Password no coincide'
    return false
  }
  try {
    const response = await signUp({user: formData})
    setCurrentUser(response)
    signUpData.success = 'Redireccionando...'
    signUpData.error = null
  } catch(er) {
    signUpData.error = er.response.data.message
    signUpData.success = null
  }
}

</script>

<template>
  <form @submit.prevent="createUser">
    <input type="text"  v-model="formData.name" placeholder="Nombre" required/>
    <input type="text"  v-model="formData.last_name" placeholder="Apellido" required/>
    <input type="email" v-model="formData.email" placeholder="email" required/>
    <input type="password" v-model="formData.password" placeholder="Password" required/>
    <input type="password" v-model="formData.confirm_password" placeholder="Confirm Password" required/>

    <button type="button"> Cancelar </button>
    <button> Crear Usuario </button>

    
    <label v-if="signUpData.success">{{signUpData.success}}</label>
    <label v-if="signUpData.error">{{signUpData.error}}</label>
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
