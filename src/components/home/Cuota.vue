<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  cuota: Object
})

const store = useStore()
const emit = defineEmits(['toggleDisplayRemoveCuotaModal'])

const removeCuota = () => {
    store.commit('selectCuota', props.cuota)
    emit('toggleDisplayRemoveCuotaModal', true)
}
</script>

<template>
    <div>
        <h3> {{cuota.descripcion}} </h3>
        <h2> ${{cuota.costoCuota}}  (${{cuota.total}}) </h2>
        <label> Compra hecha el {{cuota.fecha}} </label>
        <br>
        <label>Cuotas: {{cuota.cuotas}} / Pagadas {{cuota.pagadas}}</label>
        <br>
        <label>Tarjeta: {{cuota.tarjeta}} </label>
        <br>
        <label>Progreso: 0%</label>
        <br>
        <br>
        <a href="#" @click="removeCuota"> Eliminar </a>
    </div>
</template>

<style scoped>
</style>
