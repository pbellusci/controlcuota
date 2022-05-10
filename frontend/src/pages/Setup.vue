<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

</script>

<template>
    <h1> Configuracion </h1>
    <nav>
        <ul>
            <li>
                <router-link to="/setup/tarjetas">Tarjetas</router-link>
            </li>
            <li>
                <router-link to="/setup/categorias">Categorias</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
</style>
