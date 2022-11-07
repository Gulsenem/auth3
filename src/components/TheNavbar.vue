<template>
  <router-link to="/">Home</router-link>  |
  <router-link to="/about">About</router-link>  |
  <router-link to="/dashboard">Dashboard</router-link>  |
  <router-link v-if="isAuthenticated" to="/profile">Hallo, {{ user.given_name }}!</router-link>  |
</template>

<script setup>
import {useAuth0} from "@auth0/auth0-vue";

const { isAuthenticated, user } = useAuth0();
</script>