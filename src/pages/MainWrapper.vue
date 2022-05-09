
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
</script>

<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/setup">Setup</router-link>
    </div>
    <router-view />
    <br><br><br><br>
    <i> Build 1.0.0</i>
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
