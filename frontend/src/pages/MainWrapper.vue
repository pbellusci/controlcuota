
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import Container from './Container.vue'

const logged = ref(false)
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}

function loadGoogleButton() {
  google.accounts.id.initialize({
    client_id: "921370305670-35jvffl682gqd345isigc7mvbdlbjsv1.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}
loadGoogleButton()
</script>

<template>
  <div>
      <div v-if="logged">
        <Suspense>
          <Container/>
        </Suspense>
        <i> Build 1.0.0</i>
      </div>
      <div v-if="!logged">
        <div id="buttonDiv"></div>
      </div>
  </div>
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
