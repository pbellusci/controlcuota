<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

//ONLY FOR TESTING
const randomID = () => {
    const rDate = new Date()
    return parseInt(rDate.getMilliseconds()*100*Math.random()*100*1)*10000
}

const store     = useStore()
const tarjeta   = reactive({id: randomID()})
const emit      = defineEmits(['toggleFormTarjeta'])

const agregarTarjeta = () => {
    store.commit('pushTarjeta', tarjeta)
    emit('toggleFormTarjeta', false)
}
</script>

<template>
    <form>
        <h3>Agregar Tarjeta</h3>
        <input type="text" placeholder="Tipo" required v-model="tarjeta.tipo">
        <input type="text" placeholder="Descripcion" required v-model="tarjeta.descripcion">
        <input type="text" placeholder="Banco" required v-model="tarjeta.banco">
        <button type="button" @click="agregarTarjeta"> Guardar </button>
        <button type="button" @click="emit('toggleFormTarjeta', false)"> Cancelar </button>
    </form>
</template>

<style scoped>
</style>
