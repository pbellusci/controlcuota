<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import { useStore } from 'vuex'
import Cuota from '../components/home/Cuota.vue'
import FormularioCuota from '../components/home/FormularioCuota.vue'
import AreYouSureDeleteCuota from '../components/home/AreYouSureDeleteCuota.vue'

const store = useStore();

const balance   = store.getters.balance
const cuotas    = store.getters.cuotas

const displayRemoveCuota    = ref(false)
const displayCuotaForm      = ref(false)
const displayBalanceAndList = ref(true)

const onToggleFormCuota         = (value) => {
    displayCuotaForm.value      = value
    displayBalanceAndList.value = !value
}
const onToggleAreYouSureModal   = (value) => {
    displayRemoveCuota.value    = value
    displayBalanceAndList.value = !value
}
</script>

<template>
    <!-- BALANCE -->
    <div v-if="displayBalanceAndList">
        <h1>La jarra loca</h1>
        <button @click="onToggleFormCuota(true)"> Nueva Compra</button>
        <h3>Balance Actual <br/> 5.000 ( 60.000 )</h3>
        <hr>
    </div>

    <!-- cuotas -->
    <div v-if="displayBalanceAndList">
        <Cuota @toggleDisplayRemoveCuotaModal="onToggleAreYouSureModal" v-for="cuota in cuotas" :cuota="cuota" :key="cuota.id"/>
    </div>

    <FormularioCuota @toggleFormCuota="onToggleFormCuota" v-if="displayCuotaForm"/>
    <AreYouSureDeleteCuota @toggleDisplayRemoveCuotaModal="onToggleAreYouSureModal" v-if="displayRemoveCuota"/>
    <br>
    <br>
    <br>
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
