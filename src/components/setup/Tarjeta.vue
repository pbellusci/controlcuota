<script setup>
import { defineEmits, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['toggleRemoveTarjetaModal'])

const removeTarjeta = () => {
    //store.commit('selectCuota', props.cuota)
    emit('toggleRemoveTarjetaModal', true)
}
</script>

<template>
    <h2> VISA - Banco Macro 1  </h2>
    <a href="#"  @click="removeTarjeta"> Eliminar </a>
</template>

<style scoped>
</style>
