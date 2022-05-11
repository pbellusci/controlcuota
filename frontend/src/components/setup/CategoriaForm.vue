<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

//ONLY FOR TESTING
const randomID = () => {
    const rDate = new Date()
    return parseInt(rDate.getMilliseconds()*100*Math.random()*100*1)*10000
}

const store       = useStore()
const categoria   = reactive({id: randomID()})
const emit        = defineEmits(['toggleFormCategoria'])

const agregarCategoria = () => {
    store.commit('pushCategoria', categoria)
    emit('toggleFormCategoria', false)
}
</script>

<template>
    <form>
        <h3>Agregar Categoria</h3>
        <input type="text" placeholder="Tipo" required v-model="categoria.name">
        <button type="button" @click="agregarCategoria"> Guardar </button>
        <button type="button" @click="emit('toggleFormCategoria', false)"> Cancelar </button>
    </form>
</template>

<style scoped>
</style>
