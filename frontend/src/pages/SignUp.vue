
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <form>
    <input type="text" placeholder="Nombre" required/>
    <input type="text" placeholder="Apellido" required/>
    <input type="email" placeholder="email" required/>
    <input type="password" placeholder="Password" required/>
    <input type="password" placeholder="Confirm Password" required/>

    <button type="button"> Cancelar </button>
    <button type="button"> Crear Usuario </button>
  </form>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
