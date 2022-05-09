<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import TarjetaForm from '../../components/setup/TarjetaForm.vue'
import Tarjeta from '../../components/setup/Tarjeta.vue'
import AreYouSureDeleteTarjeta from '../../components/setup/AreYouSureDeleteTarjeta.vue'

const store = useStore()
const displayRemoveTarjetaModal     = ref(false) 
const displayTarjetaForm            = ref(false)
const displayTarjetaList            = ref(true)

const onToggleFormTarjeta = (value) => {
    displayTarjetaForm.value    = value
    displayTarjetaList.value    = !value
}
const onToggleRemoveTarjetaModal  = (value) => {
    displayRemoveTarjetaModal.value    = value
    displayTarjetaList.value = !value
}
</script>

<template>
    <h1> Listado de tarjetas </h1>
    <button @click="onToggleFormTarjeta(true)"> Agregar nueva tarjeta </button>
    <div v-if="displayTarjetaList">
        <Tarjeta @toggleRemoveTarjetaModal="onToggleRemoveTarjetaModal"/>
    </div>

    <TarjetaForm @toggleFormTarjeta="onToggleFormTarjeta" v-if="displayTarjetaForm"/>
    <AreYouSureDeleteTarjeta @toggleRemoveTarjetaModal="onToggleRemoveTarjetaModal" v-if="displayRemoveTarjetaModal"/>
</template>

<style scoped>
</style>
