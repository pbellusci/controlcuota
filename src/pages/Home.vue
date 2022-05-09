<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import Cuota from '../components/Cuota.vue'
import FormularioCuota from '../components/FormularioCuota.vue'
import AreYouSureDeleteCuota from '../components/AreYouSureDeleteCuota.vue'

const displayRemoveCuota = ref(false) 
const displayCuotaForm = ref(false)

const onToggleFormCuota = (value) => displayCuotaForm.value = value
const onToggleAreYouSureModal = (value) => displayRemoveCuota.value = value

</script>

<template>
    <h1>La jarra loca</h1>  
    <button @click="displayCuotaForm = true"> Nueva Compra</button>
    <h2>5.000 ( 60.000 )</h2>
    
    <Cuota @toggleDisplayRemoveCuotaModal="onToggleAreYouSureModal"/>
    <FormularioCuota @toggleFormCuota="onToggleFormCuota" v-show="displayCuotaForm"/>
    <AreYouSureDeleteCuota @toggleDisplayRemoveCuotaModal="onToggleAreYouSureModal" v-show="displayRemoveCuota"/>
    <br>
    <br>
    <br>
    <i> Build 1.0.0</i>
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
