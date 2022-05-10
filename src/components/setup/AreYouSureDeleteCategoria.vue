<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['toggleRemoveCategoriaModal'])

const clearSelectedCategoria = () => {
    store.commit('selectCategoria', {})
    emit('toggleRemoveCategoriaModal', false)
}

const removeCategoria = () => {
    store.commit('removeCategoria', store.getters.categoriaSelected.id)
    clearSelectedCategoria()
}
</script>

<template>
    <div>   
        <h1> Estas seguro de eliminar esta Categoria? </h1>
        <h2> {{ store.getters.categoriaSelected.nombre }}</h2>
        <br>
        <button @click="removeCategoria">Si, estoy seguro. ELIMINAR</button>
        <button @click="clearSelectedCategoria">CANCELAR</button>
    </div>
</template>

<style scoped>
</style>
