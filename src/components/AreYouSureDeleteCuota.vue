<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggleDisplayRemoveCuotaModal'])
</script>

<template>
    <div>
        <h1> Estas seguro de eliminar esta compra? </h1>
        <h3> Remera Adidas Azul </h3>
        <h2> $5.000  ($60.000) </h2>
        <label> Compra hecha el 01/01/2022 </label>
        <br>
        <label>Cuotas: 12 / Pagadas 5</label>
        <br>
        <label>Progreso: 50%</label>
        <br>
        <button @click="emit('toggleDisplayRemoveCuotaModal', false)">Si, estoy seguro. ELIMINAR</button>
        <button @click="emit('toggleDisplayRemoveCuotaModal', false)">CANCELAR</button>
    </div>
</template>

<style scoped>
</style>
