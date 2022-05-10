<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  tarjeta: Object
})
const store = useStore()
const emit = defineEmits(['toggleRemoveTarjetaModal'])

const removeTarjeta = () => {
    store.commit('selectTarjeta', props.tarjeta)
    emit('toggleRemoveTarjetaModal', true)
}
</script>

<template>
    <h2>{{ tarjeta.tipo }} - {{ tarjeta.banco }} - "{{ tarjeta.descripcion }}"</h2>
    <a href="#"  @click="removeTarjeta"> Eliminar </a>
</template>

<style scoped>
</style>
