<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

//ONLY FOR TESTING
const randomID = () => {
    const rDate = new Date()
    return parseInt(rDate.getMilliseconds()*100*Math.random()*100*1)*10000
}

const store = useStore()
const cuota = reactive({id: randomID(), pagadas: 55})
const emit = defineEmits(['toggleFormCuota'])

const agregarCuota = () => {
    store.commit('pushCuota', cuota)
    emit('toggleFormCuota', false)
}
</script>

<template>
    <form>
        <h3>Agregar gasto</h3>
        <input type="text" placeholder="Descripcion" required v-model="cuota.descripcion">
        <input type="text" placeholder="Total" required v-model="cuota.total">
        <input type="text" placeholder="Cuotas" required v-model="cuota.cuotas">
        <input type="text" placeholder="Valor cuota" required v-model="cuota.costoCuota">
        <input type="text" placeholder="Fecha" required v-model="cuota.fecha">
        <button type="button" @click="agregarCuota"> Guardar </button>
        <button type="button" @click="emit('toggleFormCuota', false)"> Cancelar </button>
    </form>
</template>

<style scoped>
</style>
