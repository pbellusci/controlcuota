<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['toggleRemoveTarjetaModal'])

const clearSelectedcuota = () => {
    //store.commit('selectCuota', {})
    emit('toggleRemoveTarjetaModal', false)
}

const removeCuota = () => {
    //store.commit('removeCuota', store.getters.cuotaSelected.id)
    clearSelectedcuota()
}
</script>

<template>
    <div>   
        <h1> Estas seguro de eliminar esta Tarjeta? </h1>
        <h2> Visa Macro 1 </h2>
        <br>
        <button @click="removeCuota">Si, estoy seguro. ELIMINAR</button>
        <button @click="clearSelectedcuota">CANCELAR</button>
    </div>
</template>

<style scoped>
</style>
