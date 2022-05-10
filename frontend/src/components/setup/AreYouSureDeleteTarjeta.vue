<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['toggleRemoveTarjetaModal'])

const clearSelectedTarjeta = () => {
    store.commit('selectTarjeta', {})
    emit('toggleRemoveTarjetaModal', false)
}

const removeTarjeta = () => {
    store.commit('removeTarjeta', store.getters.tarjetaSelected.id)
    clearSelectedTarjeta()
}
</script>

<template>
    <div>   
        <h1> Estas seguro de eliminar esta Tarjeta? </h1>
        <h2> {{ store.getters.tarjetaSelected.tipo }} -- {{ store.getters.tarjetaSelected.banco }} -- "{{ store.getters.tarjetaSelected.descripcion }}"</h2>
        <br>
        <button @click="removeTarjeta">Si, estoy seguro. ELIMINAR</button>
        <button @click="clearSelectedTarjeta">CANCELAR</button>
    </div>
</template>

<style scoped>
</style>
