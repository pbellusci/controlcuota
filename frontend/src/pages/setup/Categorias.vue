<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import CategoriaForm from '../../components/setup/CategoriaForm.vue'
import Categoria from '../../components/setup/Categoria.vue'
import AreYouSureDeleteCategoria from '../../components/setup/AreYouSureDeleteCategoria.vue'

const store = useStore()
const categorias = store.getters.categorias
const displayRemoveCategoriaModal     = ref(false) 
const displayCategoriaForm            = ref(false)
const displayCategoriaList            = ref(true)

const onToggleFormCategoria = (value) => {
    displayCategoriaForm.value    = value
    displayCategoriaList.value    = !value
}
const onToggleRemoveCategoriaModal  = (value) => {
    displayRemoveCategoriaModal.value    = value
    displayCategoriaList.value = !value
}
</script>

<template>
    <div v-if="displayCategoriaList">
        <h1> Listado de Categorias </h1>
        <button @click="onToggleFormCategoria(true)"> Agregar nueva categoria </button>
        <Categoria @toggleRemoveCategoriaModal="onToggleRemoveCategoriaModal" v-for="categoria in categorias" :categoria="categoria" :key="categoria.id"/>
    </div>

    <CategoriaForm @toggleFormCategoria="onToggleFormCategoria" v-if="displayCategoriaForm"/>
    <AreYouSureDeleteCategoria @toggleRemoveCategoriaModal="onToggleRemoveCategoriaModal" v-if="displayRemoveCategoriaModal"/>
</template>

<style scoped>
</style>
