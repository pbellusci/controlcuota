<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  categoria: Object
})
const store = useStore()
const emit = defineEmits(['toggleRemoveCategoriaModal'])

const removeCategoria = () => {
    store.commit('selectCategoria', props.categoria)
    emit('toggleRemoveCategoriaModal', true)
}
</script>

<template>
    <h2>{{ categoria.nombre}}</h2>
    <a href="#"  @click="removeCategoria"> Eliminar </a>
</template>

<style scoped>
</style>
