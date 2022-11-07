<template>
  <h1>Dashboard</h1>
  <h5>await data = {{data}}</h5>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const { getAccessTokenSilently } = useAuth0();

    return {
      doSomethingWithToken: async () => {
        const token = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3001', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
      }
    };
  }
};
</script>
