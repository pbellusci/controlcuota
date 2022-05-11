<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['toggleDisplayRemoveCuotaModal'])

const clearSelectedCuota = () => {
    store.commit('selectCuota', {})
    emit('toggleDisplayRemoveCuotaModal', false)
}

const removeCuota = () => {
    store.commit('removeCuota', store.getters.cuotaSelected.id)
    clearSelectedCuota()
}
</script>

<template>
    <div>
        <h1> Estas seguro de eliminar esta compra? </h1>
        <h3> {{store.getters.cuotaSelected.descripcion}} </h3>
        <h2> ${{store.getters.cuotaSelected.total}}  (${{store.getters.cuotaSelected.costoCuota}}) </h2>
        <label> Compra hecha el {{store.getters.cuotaSelected.fecha}} </label>
        <br>
        <label>Cuotas: {{store.getters.cuotaSelected.cuotas}} / Pagadas {{store.getters.cuotaSelected.pagadas}}</label>
        <br>
        <label>Progreso: 0%</label>
        <br>
        <button @click="removeCuota">Si, estoy seguro. ELIMINAR</button>
        <button @click="clearSelectedCuota">CANCELAR</button>
    </div>
</template>

<style scoped>
</style>
