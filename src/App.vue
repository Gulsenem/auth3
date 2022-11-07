<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div>
      <TheNavbar></TheNavbar>
      <button id="login" v-if="!isAuthenticated" @click="login()">Login</button>
      <button id="logout" v-else @click="logOut()">Logout</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import { useAuth0 } from '@auth0/auth0-vue';

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  function login(){
    loginWithRedirect();
  };
  function  logOut(){
    logout({ returnTo: window.location.origin });
  };
</script>


<style scoped>
.logo {
  height: 4em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#login{
  background-color: #4db63d;
  color:white;
}
#logout{
   border-color: #646cff;
   color:#646cff;
 }
</style>
