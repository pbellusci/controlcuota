<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggleFormCuota'])
</script>

<template>
    <form>
        <h3>Agregar gasto</h3>
        <input type="text" placeholder="Descripcion" required>
        <input type="text" placeholder="Total" required>
        <input type="text" placeholder="Cuotas" required>
        <input type="text" placeholder="Valor cuota" required>
        <input type="text" placeholder="Fecha" required>
        <button @click="emit('toggleFormCuota', false)"> Guardar </button>
        <button type="button" @click="emit('toggleFormCuota', false)"> Cancelar </button>
    </form>
</template>

<style scoped>
</style>
