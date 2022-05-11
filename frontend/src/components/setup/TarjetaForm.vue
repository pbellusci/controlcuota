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
console.log(store.getters.setup)
</script>

<template>
    <form>
        <h3>Agregar Tarjeta</h3>
        <select v-model="tarjeta.tipo" required>
            <option value=""></option>
            <option v-for="tipo, index in store.getters.getSetup.tipo_tarjeta" :value="tipo" :key="index">{{tipo}}</option>
        </select>

        <select v-model="tarjeta.banco" required>
            <option value=""></option>
            <option v-for="tipo, index in store.getters.getSetup.bancos" :value="tipo" :key="index">{{tipo}}</option>
        </select>

        <input type="text" placeholder="Descripcion" required v-model="tarjeta.descripcion">
        <button type="button" @click="agregarTarjeta"> Guardar </button>
        <button type="button" @click="emit('toggleFormTarjeta', false)"> Cancelar </button>
    </form>
</template>

<style scoped>
</style>
